const { mat4, vec2, vec3, vec4 } = glMatrix;

class GlApp {
    constructor(canvas_id, width, height, scene) {
        // initialize <canvas> with a WebGL 2 context
        this.canvas = document.getElementById(canvas_id);
        this.canvas.width = width;
        this.canvas.height = height;
        this.gl = this.canvas.getContext('webgl2');
        if (!this.gl) {
            alert('Unable to initialize WebGL 2. Your browser may not support it.');
        }

        // initialize local data members
        this.shader = {                              // Each shader object will contain the GPU program
            gouraud_color: null,                     // (vertex shader + fragment shader) and its
            gouraud_texture: null,                   // corresponding uniform variables
            phong_color: null,
            phong_texture: null
        };

        this.vertex_position_attrib = 0;             // vertex attribute 0: 3D position
        this.vertex_normal_attrib = 1;               // vertex attribute 1: 3D normal vector
        this.vertex_texcoord_attrib = 2;             // vertex attribute 2: 2D texture coordinates

        this.projection_matrix = mat4.create();      // projection matrix (on CPU)
        this.view_matrix = mat4.create();            // view matrix (on CPU)
        this.model_matrix = mat4.create();           // model matrix (on CPU)

        this.vertex_array = {                        // model Vertex Array Objects (contains all attributes
            plane: null,                             // of the model - vertices, normals, faces, ...)
            cube: null,
            sphere: null,
            custom: null,
            star: null, 
            blender_model: null
        };

        this.scene = scene;                          // current scene to draw (list of models and lights)
        this.algorithm = 'gouraud';                  // current shading algorithm to use for rendering

        this.points_data = 2; 


        // download and compile shaders into GPU program
        let gouraud_color_vs = this.getFile('shaders/gouraud_color.vert');
        let gouraud_color_fs = this.getFile('shaders/gouraud_color.frag');
        let gouraud_texture_vs = this.getFile('shaders/gouraud_texture.vert');
        let gouraud_texture_fs = this.getFile('shaders/gouraud_texture.frag');
        let phong_color_vs = this.getFile('shaders/phong_color.vert');
        let phong_color_fs = this.getFile('shaders/phong_color.frag');
        let phong_texture_vs = this.getFile('shaders/phong_texture.vert');
        let phong_texture_fs = this.getFile('shaders/phong_texture.frag');
        let emissive_vs = this.getFile('shaders/emissive.vert');
        let emissive_fs = this.getFile('shaders/emissive.frag');

        Promise.all([gouraud_color_vs, gouraud_color_fs, gouraud_texture_vs, gouraud_texture_fs,
            phong_color_vs, phong_color_fs, phong_texture_vs, phong_texture_fs,
            emissive_vs, emissive_fs])
            .then((shaders) => this.loadAllShaders(shaders))
            .catch((error) => this.getFileError(error));
    }

    loadAllShaders(shaders) {
        this.shader.gouraud_color = this.createShaderProgram(shaders[0], shaders[1]);
        this.shader.gouraud_texture = this.createShaderProgram(shaders[2], shaders[3]);
        this.shader.phong_color = this.createShaderProgram(shaders[4], shaders[5]);
        this.shader.phone_texture = this.createShaderProgram(shaders[6], shaders[7]);
        this.shader.emissive = this.createShaderProgram(shaders[8], shaders[9]);

        this.initializeGlApp();
    }

    createShaderProgram(vert_source, frag_source) {
        // Compile shader program
        let program = glslCreateShaderProgram(this.gl, vert_source, frag_source);

        // Bind vertex input data locations
        this.gl.bindAttribLocation(program, this.vertex_position_attrib, 'vertex_position');
        this.gl.bindAttribLocation(program, this.vertex_normal_attrib, 'vertex_normal');
        this.gl.bindAttribLocation(program, this.vertex_texcoord_attrib, 'vertex_texcoord');

        // Link shader program
        glslLinkShaderProgram(this.gl, program);

        // Get list of uniforms available in shaders
        let uniforms = glslGetShaderProgramUniforms(this.gl, program);

        return { program: program, uniforms: uniforms };
    }

    initializeGlApp() {
        // set drawing area to be the entire framebuffer
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        // set the background color
        this.gl.clearColor(this.scene.background[0], this.scene.background[1], this.scene.background[2], 1.0);
        // enable z-buffer for visible surface determination
        this.gl.enable(this.gl.DEPTH_TEST);

        // create models - plane, cube, sphere, custom and star
        this.vertex_array.plane = createPlaneVertexArray(this.gl, this.vertex_position_attrib,
            this.vertex_normal_attrib,
            this.vertex_texcoord_attrib);
        this.vertex_array.cube = createCubeVertexArray(this.gl, this.vertex_position_attrib,
            this.vertex_normal_attrib,
            this.vertex_texcoord_attrib);
        this.vertex_array.sphere = createSphereVertexArray(this.gl, this.vertex_position_attrib,
            this.vertex_normal_attrib,
            this.vertex_texcoord_attrib);
        this.vertex_array.custom = createCustomVertexArray(this.gl, this.vertex_position_attrib,
            this.vertex_normal_attrib,
            this.vertex_texcoord_attrib);
        this.vertex_array.star = createCustomVertexArrayStar(this.gl, this.vertex_position_attrib,
               this.vertex_normal_attrib);
        this.vertex_array.blender_model = createCustomVertexArrayBlenderModel(this.gl, this.vertex_position_attrib,
            this.vertex_normal_attrib);

        // initialize projection matrix with a 45deg field of view
        let fov = 30.0 * (Math.PI / 180.0);
        let aspect = this.canvas.width / this.canvas.height;
        mat4.perspective(this.projection_matrix, fov, aspect, 0.1, 100.0);

        // initialize view matrix based on scene's camera location / direction
        let cam_pos = this.scene.camera.position;
        let cam_target = this.scene.camera.target;
        let cam_up = this.scene.camera.up;
        mat4.lookAt(this.view_matrix, cam_pos, cam_target, cam_up);

        // render scene
        this.render();
    }

    initializeTexture(image_url) {
        // create a texture, and upload a temporary 1px white RGBA array [255,255,255,255]
        let texture = this.gl.createTexture();

        //
        // TODO: set texture parameters and upload a temporary 1px white RGBA array [255,255,255,255]
        // 

        // download the actual image
        let image = new Image();
        image.crossOrigin = 'anonymous';
        image.addEventListener('load', (event) => {
            // once image is downloaded, update the texture image
            this.updateTexture(texture, image);
        }, false);
        image.src = image_url;

        return texture;
    }

    updateTexture(texture, image_element) {
        //
        // TODO: update image for specified texture
        //
    }

    render() {
        // delete previous frame (reset both framebuffer and z-buffer)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        // draw all models
        for (let i = 0; i < this.scene.models.length; i++) {
            let currentModel = this.scene.models[i];
            if (this.vertex_array[this.scene.models[i].type] == null) continue;

            let selected_shader;
            if (this.algorithm === 'gouraud') { // gouraud
                if (currentModel.shader === 'texture') { // texture
                    selected_shader = "gouraud_texture";
                } else { // color or assumed color
                    selected_shader = "gouraud_color";
                }
            } else if (this.algorithm === 'phong') { // phong
                console.log("PHONG");
                if (currentModel.shader === 'texture') { // texture
                    console.log("PHONG TEXTURE");
                    selected_shader = "phong_texture";
                } else { // color or assumed color
                    selected_shader = "phong_color";
                }
            } else {
                selected_shader = "emissive";
            }

            this.gl.useProgram(this.shader[selected_shader].program);

            // transform model to proper position, size, and orientation
            glMatrix.mat4.identity(this.model_matrix);
            glMatrix.mat4.translate(this.model_matrix, this.model_matrix, this.scene.models[i].center);
            glMatrix.mat4.rotateZ(this.model_matrix, this.model_matrix, this.scene.models[i].rotate_z);
            glMatrix.mat4.rotateY(this.model_matrix, this.model_matrix, this.scene.models[i].rotate_y);
            glMatrix.mat4.rotateX(this.model_matrix, this.model_matrix, this.scene.models[i].rotate_x);
            glMatrix.mat4.scale(this.model_matrix, this.model_matrix, this.scene.models[i].size);

            this.gl.uniform3fv(this.shader[selected_shader].uniforms.material_color, this.scene.models[i].material.color);
            this.gl.uniform3fv(this.shader[selected_shader].uniforms.material_specular, this.scene.models[i].material.specular);
            this.gl.uniformMatrix4fv(this.shader[selected_shader].uniforms.projection_matrix, false, this.projection_matrix);
            this.gl.uniformMatrix4fv(this.shader[selected_shader].uniforms.view_matrix, false, this.view_matrix);
            this.gl.uniformMatrix4fv(this.shader[selected_shader].uniforms.model_matrix, false, this.model_matrix);

            this.gl.uniform3fv(this.shader[selected_shader].uniforms.light_ambient, this.scene.light.ambient);

            this.gl.uniform1i(this.shader[selected_shader].uniforms.lights, this.scene.light.point_lights.length);

            // add all light sources to an array buffer

            this.gl.uniform3fv(this.shader[selected_shader].uniforms.light_position, this.scene.light.point_lights[0].position);
            this.gl.uniform3fv(this.shader[selected_shader].uniforms.light_color, this.scene.light.point_lights[0].color);
            // console.log("SINGLE:","POSITION",this.scene.light.point_lights[0].position,"COLOR",this.scene.light.point_lights[0].color);
            console.log("individual", this.scene.light.point_lights[0].position, this.scene.light.point_lights[0].color)
            //let array_position = [];
            //let array_color = [];

            let light_array = [];
            // pass into shaders all the light data into one array where each array index points to a struct that 
            // holds the position and color data for each light
            for (let i = 0; i < this.scene.light.point_lights.length; i++) { // go through all of the lights
                let currentPointLight = this.scene.light.point_lights[i];
                // create a struct holding each color and position value for every index
                // Code referenced: https://www.cs.uregina.ca/Links/class-info/315/WebGL/Lab6/
                // load every light value individually to the array 
                light_array[i] = {};
                light_array[i].position = this.gl.getUniformLocation(this.shader[selected_shader].program, "light_array[" + i + "].position");
                light_array[i].color = this.gl.getUniformLocation(this.shader[selected_shader].program, "light_array[" + i + "].color");
                this.gl.uniform3fv(light_array[i].position, this.scene.light.point_lights[i].position);
                this.gl.uniform3fv(light_array[i].color, this.scene.light.point_lights[i].color);


                //for (let j = 0; j < 3; j++) { // go through light data of current point light
                // array_position.push(parseFloat(currentPointLight.position[j]));
                // array_color.push(parseFloat(currentPointLight.color[j]));
                //     array_position.push(currentPointLight.position[j]);
                //     array_color.push(currentPointLight.color[j]);
                // }
                //console.log("LOOP","POSITION",array_position,"COLOR",array_color);

            }

            ///this.gl.uniform3fv(this.shader[selected_shader].uniforms.position_array, new Float32Array(array_position));
            //console.log("Float Cast",new Float32Array(array_position), "Java type", array_position);
            //console.log("Float Cast",new Float32Array(array_color), "Java type", array_color);
            //this.gl.uniform3fv(this.shader[selected_shader].uniforms.color_array, new Float32Array(array_color));
            //console.log(parseFloat(this.scene.light.point_lights.length));

            // need to load all of my uniform values to my shader from here

            this.gl.uniform1f(this.shader[selected_shader].uniforms.material_shininess, this.scene.models[i].material.shininess);
            this.gl.uniform3fv(this.shader[selected_shader].uniforms.camera_position, this.scene.camera.position);
            //console.log(this.scene.models[i].material.shininess)

            //
            // TODO: bind proper texture and set uniform (if shader is a textured one)
            //

            this.gl.bindVertexArray(this.vertex_array[this.scene.models[i].type]);
            this.gl.drawElements(this.gl.TRIANGLES, this.vertex_array[this.scene.models[i].type].face_index_count, this.gl.UNSIGNED_SHORT, 0);
            this.gl.bindVertexArray(null);
        }


        // draw all light sources
        for (let i = 0; i < this.scene.light.point_lights.length; i++) {
            this.gl.useProgram(this.shader['emissive'].program);

            glMatrix.mat4.identity(this.model_matrix);
            glMatrix.mat4.translate(this.model_matrix, this.model_matrix, this.scene.light.point_lights[i].position);
            glMatrix.mat4.scale(this.model_matrix, this.model_matrix, glMatrix.vec3.fromValues(0.1, 0.1, 0.1));

            this.gl.uniform3fv(this.shader['emissive'].uniforms.material_color, this.scene.light.point_lights[i].color);
            this.gl.uniformMatrix4fv(this.shader['emissive'].uniforms.projection_matrix, false, this.projection_matrix);
            this.gl.uniformMatrix4fv(this.shader['emissive'].uniforms.view_matrix, false, this.view_matrix);
            this.gl.uniformMatrix4fv(this.shader['emissive'].uniforms.model_matrix, false, this.model_matrix);

            this.gl.bindVertexArray(this.vertex_array['sphere']);
            this.gl.drawElements(this.gl.TRIANGLES, this.vertex_array['sphere'].face_index_count, this.gl.UNSIGNED_SHORT, 0);
            this.gl.bindVertexArray(null);
        }
    }

    updateScene(scene) {
        // update scene
        this.scene = scene;

        // set the background color
        this.gl.clearColor(this.scene.background[0], this.scene.background[1], this.scene.background[2], 1.0);

        // update view matrix based on camera properties
        let cam_pos = this.scene.camera.position;
        let cam_target = this.scene.camera.target;
        let cam_up = this.scene.camera.up;
        glMatrix.mat4.lookAt(this.view_matrix, cam_pos, cam_target, cam_up);

        // render scene
        this.render();
    }

    setShadingAlgorithm(algorithm) {
        // update shading algorithm
        this.algorithm = algorithm;

        // render scene
        this.render();
    }

    getFile(url) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                if (req.readyState === 4 && req.status === 200) {
                    resolve(req.response);
                }
                else if (req.readyState === 4) {
                    reject({ url: req.responseURL, status: req.status });
                }
            };
            req.open('GET', url, true);
            req.send();
        });
    }

    getFileError(error) {
        console.log('Error:', error);
    }
}
