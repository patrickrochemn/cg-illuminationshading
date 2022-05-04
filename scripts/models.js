function createPlaneVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let vertices = [
        -0.5, 0.0, 0.5,
        0.5, 0.0, 0.5,
        0.5, 0.0, -0.5,
        -0.5, 0.0, -0.5
    ];
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0
    ];
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0
    ];
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);


    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [
        0, 1, 2, 0, 2, 3,
    ];
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}


function createCubeVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let vertices = [
        // Front face
        -0.5, -0.5, 0.5,
        0.5, -0.5, 0.5,
        0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5,

        // Back face
        0.5, -0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5, 0.5, -0.5,
        0.5, 0.5, -0.5,

        // Top face
        -0.5, 0.5, 0.5,
        0.5, 0.5, 0.5,
        0.5, 0.5, -0.5,
        -0.5, 0.5, -0.5,

        // Bottom face
        0.5, -0.5, 0.5,
        -0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5,
        0.5, -0.5, -0.5,

        // Right face
        0.5, -0.5, 0.5,
        0.5, -0.5, -0.5,
        0.5, 0.5, -0.5,
        0.5, 0.5, 0.5,

        // Left face
        -0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5,
        -0.5, 0.5, 0.5,
        -0.5, 0.5, -0.5
    ];
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        // Front
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,

        // Back
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,

        // Top
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        // Bottom
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,

        // Right
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,

        // Left
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0
    ];
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        // Front
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Back
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Top
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Bottom
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Right
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Left
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0
    ];
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);


    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [
        0, 1, 2, 0, 2, 3,   // Front
        4, 5, 6, 4, 6, 7,   // Back
        8, 9, 10, 8, 10, 11,   // Top
        12, 13, 14, 12, 14, 15,   // Bottom
        16, 17, 18, 16, 18, 19,   // Right
        20, 21, 22, 20, 22, 23    // Left
    ];
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}


function createSphereVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // calculate vertices, normals, texture coordinate, and faces
    let slices = 36;
    let stacks = 18;

    let phi = 0;
    let delta_phi = 2 * Math.PI / slices;
    let theta = Math.PI / 2;
    let delta_theta = -Math.PI / stacks;

    let vertices = [];
    let normals = [];
    let texcoords = [];
    for (let i = 0; i <= slices; i++) {
        let cos_phi = Math.cos(phi);
        let sin_phi = Math.sin(phi);
        theta = Math.PI / 2;
        for (let j = 0; j <= stacks; j++) {
            let cos_theta = Math.cos(theta);
            let sin_theta = Math.sin(theta);
            let x = cos_theta * cos_phi;
            let y = sin_theta;
            let z = cos_theta * -sin_phi;
            vertices.push(x / 2, y / 2, z / 2);
            normals.push(x, y, z);
            texcoords.push(i / slices, 1.0 - j / stacks);

            theta += delta_theta;
        }
        phi += delta_phi;
    }

    let indices = [];
    for (let i = 0; i < slices; i++) {
        let k1 = i * (stacks + 1);
        let k2 = (i + 1) * (stacks + 1);
        for (let j = 0; j < stacks; j++) {
            indices.push(k1, k1 + 1, k2);
            indices.push(k1 + 1, k2 + 1, k2);
            k1++;
            k2++;
        }
    }


    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);


    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}

//
// TODO: create a custom 3D model
//         - minimum of 16 vertices
//
function createCustomVertexArray(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);
    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z)
    let r = (1 + Math.sqrt(5)) / 2;
    let vertices = [
        -1.0, r, 0.0,       //0
        -1.0, -r, 0.0,      //1
        0.0, 1.0, r,        //2
        0.0, 1.0, -r,       //3
        0.0, -1.0, r,       //4
        0.0, -1.0, -r,      //5
        r, 0.0, -1.0,       //6
        r, 0.0, 1.0,        //7
        -r, 0.0, 1.0,       //8
        -r, 0.0, -1.0,      //9
        1.0, r, 0.0,        //10
        1.0, -r, 0.0,       //11
    ];
    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);


    // // create buffer to store vertex normals (vector pointing perpendicular to surface)
    // let vertex_normal_buffer = gl.createBuffer();
    // // set newly created buffer as the active one we are modifying
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    // let normals = [
    // ];

    // //  calculate normals
    // for(let i = 0; i < 12; i++) {
    //     let currentVert = [vertices[3 * i], vertices[3 * i + 1], vertices[3 * i + 2]];
    //     let nextVert = [vertices[3 * (i+1)], vertices[3 * (i+1) + 1], vertices[3 * (i+1) + 2]];
    //     // calculate x
    //     let x = (currentVert[1] - nextVert[2]) * (currentVert[2] + nextVert[2]);
    //     normals.push(x);
    //     // calculate y
    //     let y = (currentVert[2] - nextVert[2]) * (currentVert[0] + nextVert[0]);
    //     normals.push(y);
    //     // calcualte z
    //     let z = (currentVert[0] - nextVert[0]) * (currentVert[1] + nextVert[1]);
    //     normals.push(z);
    // }

    // // store array of vertex normals in the vertex_normal_buffer
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // // enable normal_attrib in our GPU program
    // gl.enableVertexAttribArray(normal_attrib);
    // // attach vertex_normal_buffer to the normal_attrib
    // // (as 3-component floating point values)
    // gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [
        // Front
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Back
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Top
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Bottom
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Right
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Left
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0
    ];
    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);


    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)
    let indices = [
        0, 2, 10,
        10, 3, 0,
        10, 2, 7,
        10, 6, 3,
        6, 10, 7,
        1, 11, 4,
        1, 5, 11,
        1, 4, 8,
        1, 9, 5,
        8, 9, 1,
        0, 8, 2,
        0, 3, 9,
        0, 9, 8,
        11, 7, 4,
        11, 5, 6,
        11, 6, 7,
        5, 9, 3,
        5, 3, 6,
        2, 8, 4,
        2, 4, 7

    ];
    let triangles = [];
    for (let i = 0; i < 20; i++) {
        let v1 = indices[i * 3];
        let v2 = indices[(i * 3) + 1];
        let v3 = indices[(i * 3) + 2];
        triangles.push([v1, v2, v3]);
    }
    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)
    let normals = [
        -1.0, r, 0.0,       //0
        -1.0, -r, 0.0,      //1
        0.0, 1.0, r,        //2
        0.0, 1.0, -r,       //3
        0.0, -1.0, r,       //4
        0.0, -1.0, -r,      //5
        r, 0.0, -1.0,       //6
        r, 0.0, 1.0,        //7
        -r, 0.0, 1.0,       //8
        -r, 0.0, -1.0,      //9
        1.0, r, 0.0,        //10
        1.0, -r, 0.0,       //11
    ];

    // triangles.forEach(function (triangle) {
    //     let v1 = triangle[0];
    //     let v2 = triangle[1];
    //     let v3 = triangle[2];
    //     let side1 = vec3(v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]);
    //     let side2 = vec3(v3[0] - v2[0], v3[1] - v2[1], v3[2] - v2[2]);
    //     let normal = dot(side1, side2);
    //     normal = normalize(normal);
    //     normals.push(normal);
    // });

    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);


    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);


    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;


    // return created Vertex Array Object
    return vertex_array;
}

function createCustomVertexArrayStar(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z) 
    let vertices = [];
    // Edit this to change how many points the star has
    let points = 21;

    let angle = (Math.PI * 2) / points;
    let halfAngle = angle / 2.0;
    let radius1 = 0.5;
    let radius2 = 0.25;

    vertices.push(0.0, 0.0, 0.2);
    vertices.push(0.0, 0.0, -0.2);

    for (let a = 0; a <= (Math.PI * 2); a += angle) {
        let sx = Math.cos(a) * radius2;
        let sy = Math.sin(a) * radius2;
        vertices.push(sx, sy, 0.0);
        sx = Math.cos(a + halfAngle) * radius1;
        sy = Math.sin(a + halfAngle) * radius1;
        vertices.push(sx, sy, 0.0);
    }

    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);

    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)

    let normals = [];

    // For center vertex front and back
    normals.push(0, 0, 1.0, 0, 0, -1.0);
    // For all point vertices
    for (let a = 0; a <= (Math.PI * 2); a += angle) {
        let sx = Math.cos(a) * radius2;
        let sy = Math.sin(a) * radius2;
        normals.push(sx, sy, 0.0);
        sx = Math.cos(a + halfAngle) * radius1;
        sy = Math.sin(a + halfAngle) * radius1;
        normals.push(sx, sy, 0.0);
    }



    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [];

    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);





    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);

    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)

    let indices = [];

    for (let i = 0; i < points * 2; i++) {
        indices.push(0, i + 2, i + 3);
    }

    for (let i = 0; i < points * 2; i++) {
        indices.push(1, i + 2, i + 3);
    }
    indices.push(0,2,points*2+1)
    indices.push(1, 2, points*2+1);

    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);

    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;

    // return created Vertex Array Object
    return vertex_array;
}

// Resource used: https://blender.stackexchange.com/questions/93804/i-want-to-export-vertex-data-of-a-simple-object-which-include-normal-and-color-d
function createCustomVertexArrayBlenderModel(gl, position_attrib, normal_attrib, texcoord_attrib) {
    // create a new Vertex Array Object
    let vertex_array = gl.createVertexArray();
    // set newly created Vertex Array Object as the active one we are modifying
    gl.bindVertexArray(vertex_array);


    // create buffer to store vertex positions (3D points)
    let vertex_position_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    // create array of 3D vertex values (each set of 3 values specifies a vertex: x, y, z) 

    let vertices = [
        0.000000, -5.420579, 39.190041,
        0.000000, -4.971490, 43.327557,
        -2.922169, -4.022019, 43.327557,
        -3.186137, -4.385340, 39.190041,
        -3.186137, -4.385340, 39.190041,
        -2.922169, -4.022019, 43.327557,
        -4.728168, -1.536275, 43.327557,
        -5.155276, -1.675052, 39.190041,
        -5.155276, -1.675052, 39.190041,
        -4.728168, -1.536275, 43.327557,
        -4.728168, 1.536276, 43.327557,
        -5.155276, 1.675052, 39.190041,
        -5.155276, 1.675052, 39.190041,
        -4.728168, 1.536276, 43.327557,
        -2.922168, 4.022019, 43.327557,
        -3.186137, 4.385340, 39.190041,
        -3.186137, 4.385340, 39.190041,
        -2.922168, 4.022019, 43.327557,
        0.000000, 4.971490, 43.327557,
        0.000000, 5.420579, 39.190041,
        0.000000, 2.557294, 50.464661,
        -1.503140, 2.068894, 50.464661,
        -0.401785, 0.553010, 52.896873,
        0.000000, 0.683558, 52.896873,
        -1.503140, 2.068894, 50.464661,
        -2.432131, 0.790247, 50.464661,
        -0.650102, 0.211231, 52.896873,
        -0.401785, 0.553010, 52.896873,
        -2.432131, 0.790247, 50.464661,
        -2.432131, -0.790247, 50.464661,
        -0.650102, -0.211231, 52.896873,
        -0.650102, 0.211231, 52.896873,
        -2.432131, -0.790247, 50.464661,
        -1.503140, -2.068894, 50.464661,
        -0.401785, -0.553010, 52.896873,
        -0.650102, -0.211231, 52.896873,
        -1.503140, -2.068894, 50.464661,
        0.000000, -2.557295, 50.464657,
        0.000000, -0.683558, 52.896873,
        -0.401785, -0.553010, 52.896873,
        -2.922169, -4.022019, 43.327557,
        0.000000, -4.971490, 43.327557,
        0.000000, -4.010313, 47.287632,
        -2.357203, -3.244411, 47.287636,
        -2.357203, -3.244411, 47.287636,
        0.000000, -4.010313, 47.287632,
        0.000000, -2.557295, 50.464657,
        -1.503140, -2.068894, 50.464661,
        -4.728168, -1.536275, 43.327557,
        -2.922169, -4.022019, 43.327557,
        -2.357203, -3.244411, 47.287636,
        -3.814034, -1.239255, 47.287636,
        -3.814034, -1.239255, 47.287636,
        -2.357203, -3.244411, 47.287636,
        -1.503140, -2.068894, 50.464661,
        -2.432131, -0.790247, 50.464661,
        -4.728168, 1.536276, 43.327557,
        -4.728168, -1.536275, 43.327557,
        -3.814034, -1.239255, 47.287636,
        -3.814034, 1.239255, 47.287636,
        -3.814034, 1.239255, 47.287636,
        -3.814034, -1.239255, 47.287636,
        -2.432131, -0.790247, 50.464661,
        -2.432131, 0.790247, 50.464661,
        -2.922168, 4.022019, 43.327557,
        -4.728168, 1.536276, 43.327557,
        -3.814034, 1.239255, 47.287636,
        -2.357203, 3.244411, 47.287636,
        -2.357203, 3.244411, 47.287636,
        -3.814034, 1.239255, 47.287636,
        -2.432131, 0.790247, 50.464661,
        -1.503140, 2.068894, 50.464661,
        0.000000, 4.971490, 43.327557,
        -2.922168, 4.022019, 43.327557,
        -2.357203, 3.244411, 47.287636,
        0.000000, 4.010313, 47.287636,
        0.000000, 4.010313, 47.287636,
        -2.357203, 3.244411, 47.287636,
        -1.503140, 2.068894, 50.464661,
        0.000000, 2.557294, 50.464661,
        -2.982984, 4.105722, 28.430899,
        0.000000, 5.074952, 28.430899,
        0.000000, 3.953898, 16.516209,
        -2.324046, 3.198770, 16.516209,
        -4.826567, 1.568247, 28.430899,
        -2.982984, 4.105722, 28.430899,
        -2.324046, 3.198770, 16.516209,
        -3.758688, 1.181246, 16.517889,
        -4.826567, -1.568247, 28.430899,
        -4.826567, 1.568247, 28.430899,
        -3.758688, 1.181246, 16.517889,
        -3.758688, -1.181246, 16.517889,
        -2.982984, -4.105722, 28.430899,
        -4.826567, -1.568247, 28.430899,
        -3.758688, -1.181246, 16.517889,
        -2.324046, -3.198770, 16.516209,
        0.000000, -5.074952, 28.430899,
        -2.982984, -4.105722, 28.430899,
        -2.324046, -3.198770, 16.516209,
        0.000000, -3.953898, 16.516209,
        0.000000, -5.420579, 39.190041,
        -3.186137, -4.385340, 39.190041,
        -2.982984, -4.105722, 28.430899,
        0.000000, -5.074952, 28.430899,
        -3.186137, -4.385340, 39.190041,
        -5.155276, -1.675052, 39.190041,
        -4.826567, -1.568247, 28.430899,
        -2.982984, -4.105722, 28.430899,
        -5.155276, -1.675052, 39.190041,
        -5.155276, 1.675052, 39.190041,
        -4.826567, 1.568247, 28.430899,
        -4.826567, -1.568247, 28.430899,
        -5.155276, 1.675052, 39.190041,
        -3.186137, 4.385340, 39.190041,
        -2.982984, 4.105722, 28.430899,
        -4.826567, 1.568247, 28.430899,
        -3.186137, 4.385340, 39.190041,
        0.000000, 5.420579, 39.190041,
        0.000000, 5.074952, 28.430899,
        -2.982984, 4.105722, 28.430899,
        -3.758688, 1.181246, 16.517889,
        -2.324046, 3.198770, 16.516209,
        -1.117275, 1.537791, 1.014266,
        -1.809183, 0.620818, 1.012882,
        0.000000, -3.953898, 16.516209,
        -2.324046, -3.198770, 16.516209,
        -1.117275, -1.537791, 1.014266,
        0.000000, -1.900815, 1.014266,
        -2.324046, 3.198770, 16.516209,
        0.000000, 3.953898, 16.516209,
        0.000000, 1.900815, 1.014266,
        -1.117275, 1.537791, 1.014266,
        -2.324046, -3.198770, 16.516209,
        -3.758688, -1.181246, 16.517889,
        -1.809183, -0.620818, 1.012882,
        -1.117275, -1.537791, 1.014266,
        -3.758688, 1.181246, 16.517889,
        -1.809183, 0.620818, 1.012882,
        -4.117448, 0.524435, 1.206724,
        -5.386491, 0.923407, 12.116254,
        -10.908871, 0.240854, 1.777046,
        -12.779829, 0.162731, 1.934165,
        -12.787613, 0.431646, 7.521755,
        -10.908870, 0.452740, 6.593874,
        -0.876869, -1.206902, 1.014266,
        0.000000, -1.491813, 1.014266,
        0.000000, -1.900815, 1.014266,
        -1.117275, -1.537791, 1.014266,
        -1.418802, -0.460996, 1.014266,
        -0.876869, -1.206902, 1.014266,
        -1.117275, -1.537791, 1.014266,
        -1.809183, -0.620818, 1.012882,
        -1.418802, 0.460996, 1.014266,
        -1.418802, -0.460996, 1.014266,
        -1.809183, -0.620818, 1.012882,
        -1.809183, 0.620818, 1.012882,
        -0.876869, 1.206902, 1.014266,
        -1.418802, 0.460996, 1.014266,
        -1.809183, 0.620818, 1.012882,
        -1.117275, 1.537791, 1.014266,
        0.000000, 1.491813, 1.014266,
        -0.876869, 1.206902, 1.014266,
        -1.117275, 1.537791, 1.014266,
        0.000000, 1.900815, 1.014266,
        -0.876869, 1.206902, 1.014266,
        0.000000, 1.491813, 1.014266,
        0.000000, 2.094514, 0.052235,
        -1.231128, 1.694497, 0.052235,
        -0.876869, -1.206902, 1.014266,
        -1.418802, -0.460996, 1.014266,
        -1.992005, -0.647241, 0.052235,
        -1.231128, -1.694497, 0.052235,
        -1.418802, -0.460996, 1.014266,
        -1.418802, 0.460996, 1.014266,
        -1.992005, 0.647241, 0.052235,
        -1.992005, -0.647241, 0.052235,
        -1.418802, 0.460996, 1.014266,
        -0.876869, 1.206902, 1.014266,
        -1.231128, 1.694497, 0.052235,
        -1.992005, 0.647241, 0.052235,
        0.000000, -1.491813, 1.014266,
        -0.876869, -1.206902, 1.014266,
        -1.231128, -1.694497, 0.052235,
        0.000000, -2.094514, 0.052235,
        -0.920578, -1.267061, 0.052235,
        0.000000, -1.566174, 0.052235,
        0.000000, -2.094514, 0.052235,
        -1.231128, -1.694497, 0.052235,
        -1.489524, -0.483975, 0.052235,
        -1.992005, -0.647241, 0.052235,
        -1.489524, 0.483975, 0.052235,
        -1.489524, -0.483975, 0.052235,
        -1.992005, -0.647241, 0.052235,
        -1.992005, 0.647241, 0.052235,
        -0.920578, 1.267061, 0.052235,
        -1.489524, 0.483975, 0.052235,
        -1.992005, 0.647241, 0.052235,
        -1.231128, 1.694497, 0.052235,
        0.000000, 1.566174, 0.052235,
        -0.920578, 1.267061, 0.052235,
        -1.231128, 1.694497, 0.052235,
        0.000000, 2.094514, 0.052235,
        -1.489524, -0.483975, 0.052235,
        -1.489524, 0.483975, 0.052235,
        0.000000, 0.000000, 1.493797,
        -1.489524, 0.483975, 0.052235,
        -0.920578, 1.267061, 0.052235,
        0.000000, 0.000000, 1.493797,
        0.000000, -1.566174, 0.052235,
        -0.920578, -1.267061, 0.052235,
        0.000000, 0.000000, 1.493797,
        -0.920578, 1.267061, 0.052235,
        0.000000, 1.566174, 0.052235,
        0.000000, 0.000000, 1.493797,
        -0.920578, -1.267061, 0.052235,
        -1.489524, -0.483975, 0.052235,
        0.000000, 0.000000, 1.493797,
        -12.787613, -0.431647, 7.521755,
        -12.787613, 0.431646, 7.521755,
        -12.779829, 0.162731, 1.934165,
        -12.779829, -0.162732, 1.934165,
        -3.758688, -1.181246, 16.517889,
        -3.758688, 1.181246, 16.517889,
        -12.787613, 0.431646, 7.521755,
        -12.787613, -0.431647, 7.521755,
        -1.809183, 0.620818, 1.012882,
        -1.809183, -0.620818, 1.012882,
        -4.117448, -0.524435, 1.206724,
        -4.117448, 0.524435, 1.206724,
        -4.117448, -0.524435, 1.206724,
        -1.809183, -0.620818, 1.012882,
        -3.758688, -1.181246, 16.517889,
        -12.787613, -0.431647, 7.521755,
        -12.779829, -0.162732, 1.934165,
        -10.908871, -0.240855, 1.777046,
        -10.908868, -0.471719, 6.593878,
        -5.386491, -0.931028, 12.116254,
        -4.117448, -0.524435, 1.206724,
        -5.386491, -0.931028, 12.116254,
        -5.377553, -0.721461, 12.125469,
        -4.098836, -0.387603, 1.364880,
        -10.908871, 0.240854, 1.777046,
        -10.908871, -0.240855, 1.777046,
        -12.779829, -0.162732, 1.934165,
        -12.779829, 0.162731, 1.934165,
        -10.908871, -0.240855, 1.777046,
        -10.908871, 0.240854, 1.777046,
        -10.890389, 0.094180, 1.926139,
        -10.890630, -0.094288, 1.926274,
        -10.908871, 0.240854, 1.777046,
        -10.908870, 0.452740, 6.593874,
        -10.899607, 0.243173, 6.602761,
        -10.890389, 0.094180, 1.926139,
        -4.098611, 0.387511, 1.364775,
        -4.098836, -0.387603, 1.364880,
        -10.890630, -0.094288, 1.926274,
        -10.890389, 0.094180, 1.926139,
        -10.890389, 0.094180, 1.926139,
        -10.899607, 0.243173, 6.602761,
        -5.377229, 0.713839, 12.125142,
        -4.098611, 0.387511, 1.364775,
        -4.098836, -0.387603, 1.364880,
        -5.377553, -0.721461, 12.125469,
        -10.899931, -0.262152, 6.603094,
        -10.890630, -0.094288, 1.926274,
        -10.908868, -0.471719, 6.593878,
        -10.908871, -0.240855, 1.777046,
        -10.890630, -0.094288, 1.926274,
        -10.899931, -0.262152, 6.603094,
        -10.908870, 0.452740, 6.593874,
        -5.386491, 0.923407, 12.116254,
        -5.377229, 0.713839, 12.125142,
        -10.899607, 0.243173, 6.602761,
        -4.117448, 0.524435, 1.206724,
        -4.117448, -0.524435, 1.206724,
        -4.098836, -0.387603, 1.364880,
        -4.098611, 0.387511, 1.364775,
        -5.386491, -0.931028, 12.116254,
        -10.908868, -0.471719, 6.593878,
        -10.899931, -0.262152, 6.603094,
        -5.377553, -0.721461, 12.125469,
        -5.386491, 0.923407, 12.116254,
        -4.117448, 0.524435, 1.206724,
        -4.098611, 0.387511, 1.364775,
        -5.377229, 0.713839, 12.125142,
        0.000000, -5.420579, 39.190041,
        3.186137, -4.385340, 39.190041,
        2.922169, -4.022019, 43.327557,
        0.000000, -4.971490, 43.327557,
        3.186137, -4.385340, 39.190041,
        5.155276, -1.675052, 39.190041,
        4.728168, -1.536275, 43.327557,
        2.922169, -4.022019, 43.327557,
        5.155276, -1.675052, 39.190041,
        5.155276, 1.675052, 39.190041,
        4.728168, 1.536276, 43.327557,
        4.728168, -1.536275, 43.327557,
        5.155276, 1.675052, 39.190041,
        3.186137, 4.385340, 39.190041,
        2.922168, 4.022019, 43.327557,
        4.728168, 1.536276, 43.327557,
        3.186137, 4.385340, 39.190041,
        0.000000, 5.420579, 39.190041,
        0.000000, 4.971490, 43.327557,
        2.922168, 4.022019, 43.327557,
        0.000000, 2.557294, 50.464661,
        0.000000, 0.683558, 52.896873,
        0.401785, 0.553010, 52.896873,
        1.503140, 2.068894, 50.464661,
        1.503140, 2.068894, 50.464661,
        0.401785, 0.553010, 52.896873,
        0.650102, 0.211231, 52.896873,
        2.432131, 0.790247, 50.464661,
        2.432131, 0.790247, 50.464661,
        0.650102, 0.211231, 52.896873,
        0.650102, -0.211231, 52.896873,
        2.432131, -0.790247, 50.464661,
        2.432131, -0.790247, 50.464661,
        0.650102, -0.211231, 52.896873,
        0.401785, -0.553010, 52.896873,
        1.503140, -2.068894, 50.464661,
        1.503140, -2.068894, 50.464661,
        0.401785, -0.553010, 52.896873,
        0.000000, -0.683558, 52.896873,
        0.000000, -2.557295, 50.464657,
        2.922169, -4.022019, 43.327557,
        2.357203, -3.244411, 47.287636,
        0.000000, -4.010313, 47.287632,
        0.000000, -4.971490, 43.327557,
        2.357203, -3.244411, 47.287636,
        1.503140, -2.068894, 50.464661,
        0.000000, -2.557295, 50.464657,
        0.000000, -4.010313, 47.287632,
        4.728168, -1.536275, 43.327557,
        3.814034, -1.239255, 47.287636,
        2.357203, -3.244411, 47.287636,
        2.922169, -4.022019, 43.327557,
        3.814034, -1.239255, 47.287636,
        2.432131, -0.790247, 50.464661,
        1.503140, -2.068894, 50.464661,
        2.357203, -3.244411, 47.287636,
        4.728168, 1.536276, 43.327557,
        3.814034, 1.239255, 47.287636,
        3.814034, -1.239255, 47.287636,
        4.728168, -1.536275, 43.327557,
        3.814034, 1.239255, 47.287636,
        2.432131, 0.790247, 50.464661,
        2.432131, -0.790247, 50.464661,
        3.814034, -1.239255, 47.287636,
        2.922168, 4.022019, 43.327557,
        2.357203, 3.244411, 47.287636,
        3.814034, 1.239255, 47.287636,
        4.728168, 1.536276, 43.327557,
        2.357203, 3.244411, 47.287636,
        1.503140, 2.068894, 50.464661,
        2.432131, 0.790247, 50.464661,
        3.814034, 1.239255, 47.287636,
        0.000000, 4.971490, 43.327557,
        0.000000, 4.010313, 47.287636,
        2.357203, 3.244411, 47.287636,
        2.922168, 4.022019, 43.327557,
        0.000000, 4.010313, 47.287636,
        0.000000, 2.557294, 50.464661,
        1.503140, 2.068894, 50.464661,
        2.357203, 3.244411, 47.287636,
        2.982984, 4.105722, 28.430899,
        2.324046, 3.198770, 16.516209,
        0.000000, 3.953898, 16.516209,
        0.000000, 5.074952, 28.430899,
        4.826567, 1.568247, 28.430899,
        3.758688, 1.181246, 16.517889,
        2.324046, 3.198770, 16.516209,
        2.982984, 4.105722, 28.430899,
        4.826567, -1.568247, 28.430899,
        3.758688, -1.181246, 16.517889,
        3.758688, 1.181246, 16.517889,
        4.826567, 1.568247, 28.430899,
        2.982984, -4.105722, 28.430899,
        2.324046, -3.198770, 16.516209,
        3.758688, -1.181246, 16.517889,
        4.826567, -1.568247, 28.430899,
        0.000000, -5.074952, 28.430899,
        0.000000, -3.953898, 16.516209,
        2.324046, -3.198770, 16.516209,
        2.982984, -4.105722, 28.430899,
        0.000000, -5.420579, 39.190041,
        0.000000, -5.074952, 28.430899,
        2.982984, -4.105722, 28.430899,
        3.186137, -4.385340, 39.190041,
        3.186137, -4.385340, 39.190041,
        2.982984, -4.105722, 28.430899,
        4.826567, -1.568247, 28.430899,
        5.155276, -1.675052, 39.190041,
        5.155276, -1.675052, 39.190041,
        4.826567, -1.568247, 28.430899,
        4.826567, 1.568247, 28.430899,
        5.155276, 1.675052, 39.190041,
        5.155276, 1.675052, 39.190041,
        4.826567, 1.568247, 28.430899,
        2.982984, 4.105722, 28.430899,
        3.186137, 4.385340, 39.190041,
        3.186137, 4.385340, 39.190041,
        2.982984, 4.105722, 28.430899,
        0.000000, 5.074952, 28.430899,
        0.000000, 5.420579, 39.190041,
        3.758688, 1.181246, 16.517889,
        1.809183, 0.620818, 1.012882,
        1.117275, 1.537791, 1.014266,
        2.324046, 3.198770, 16.516209,
        0.000000, -3.953898, 16.516209,
        0.000000, -1.900815, 1.014266,
        1.117275, -1.537791, 1.014266,
        2.324046, -3.198770, 16.516209,
        2.324046, 3.198770, 16.516209,
        1.117275, 1.537791, 1.014266,
        0.000000, 1.900815, 1.014266,
        0.000000, 3.953898, 16.516209,
        2.324046, -3.198770, 16.516209,
        1.117275, -1.537791, 1.014266,
        1.809183, -0.620818, 1.012882,
        3.758688, -1.181246, 16.517889,
        12.787613, 0.431646, 7.521755,
        12.779829, 0.162731, 1.934165,
        10.908871, 0.240854, 1.777046,
        10.908870, 0.452740, 6.593874,
        4.117448, 0.524435, 1.206724,
        1.809183, 0.620818, 1.012882,
        3.758688, 1.181246, 16.517889,
        5.386491, 0.923407, 12.116254,
        0.876869, -1.206902, 1.014266,
        1.117275, -1.537791, 1.014266,
        0.000000, -1.900815, 1.014266,
        0.000000, -1.491813, 1.014266,
        1.418802, -0.460996, 1.014266,
        1.809183, -0.620818, 1.012882,
        1.117275, -1.537791, 1.014266,
        0.876869, -1.206902, 1.014266,
        1.418802, 0.460996, 1.014266,
        1.809183, 0.620818, 1.012882,
        1.809183, -0.620818, 1.012882,
        1.418802, -0.460996, 1.014266,
        0.876869, 1.206902, 1.014266,
        1.117275, 1.537791, 1.014266,
        1.809183, 0.620818, 1.012882,
        1.418802, 0.460996, 1.014266,
        0.000000, 1.491813, 1.014266,
        0.000000, 1.900815, 1.014266,
        1.117275, 1.537791, 1.014266,
        0.876869, 1.206902, 1.014266,
        0.876869, 1.206902, 1.014266,
        1.231128, 1.694497, 0.052235,
        0.000000, 2.094514, 0.052235,
        0.000000, 1.491813, 1.014266,
        0.876869, -1.206902, 1.014266,
        1.231128, -1.694497, 0.052235,
        1.992005, -0.647241, 0.052235,
        1.418802, -0.460996, 1.014266,
        1.418802, -0.460996, 1.014266,
        1.992005, -0.647241, 0.052235,
        1.992005, 0.647241, 0.052235,
        1.418802, 0.460996, 1.014266,
        1.418802, 0.460996, 1.014266,
        1.992005, 0.647241, 0.052235,
        1.231128, 1.694497, 0.052235,
        0.876869, 1.206902, 1.014266,
        0.000000, -1.491813, 1.014266,
        0.000000, -2.094514, 0.052235,
        1.231128, -1.694497, 0.052235,
        0.876869, -1.206902, 1.014266,
        0.920578, -1.267061, 0.052235,
        1.231128, -1.694497, 0.052235,
        1.489524, -0.483975, 0.052235,
        1.992005, -0.647241, 0.052235,
        1.231128, -1.694497, 0.052235,
        0.920578, -1.267061, 0.052235,
        1.489524, 0.483975, 0.052235,
        1.992005, 0.647241, 0.052235,
        1.992005, -0.647241, 0.052235,
        1.489524, -0.483975, 0.052235,
        0.920578, 1.267061, 0.052235,
        1.231128, 1.694497, 0.052235,
        1.992005, 0.647241, 0.052235,
        1.489524, 0.483975, 0.052235,
        0.000000, 1.566174, 0.052235,
        0.000000, 2.094514, 0.052235,
        1.231128, 1.694497, 0.052235,
        0.920578, 1.267061, 0.052235,
        1.489524, -0.483975, 0.052235,
        0.000000, 0.000000, 1.493797,
        1.489524, 0.483975, 0.052235,
        1.489524, 0.483975, 0.052235,
        0.000000, 0.000000, 1.493797,
        0.920578, 1.267061, 0.052235,
        0.000000, -1.566174, 0.052235,
        0.000000, 0.000000, 1.493797,
        0.920578, -1.267061, 0.052235,
        0.920578, 1.267061, 0.052235,
        0.000000, 0.000000, 1.493797,
        0.000000, 1.566174, 0.052235,
        0.920578, -1.267061, 0.052235,
        0.000000, 0.000000, 1.493797,
        1.489524, -0.483975, 0.052235,
        12.787613, -0.431647, 7.521755,
        12.779829, -0.162732, 1.934165,
        12.779829, 0.162731, 1.934165,
        12.787613, 0.431646, 7.521755,
        3.758688, -1.181246, 16.517889,
        12.787613, -0.431647, 7.521755,
        12.787613, 0.431646, 7.521755,
        3.758688, 1.181246, 16.517889,
        1.809183, 0.620818, 1.012882,
        4.117448, 0.524435, 1.206724,
        4.117448, -0.524435, 1.206724,
        1.809183, -0.620818, 1.012882,
        3.758688, -1.181246, 16.517889,
        1.809183, -0.620818, 1.012882,
        4.117448, -0.524435, 1.206724,
        5.386491, -0.931028, 12.116254,
        10.908871, -0.240855, 1.777046,
        12.779829, -0.162732, 1.934165,
        12.787613, -0.431647, 7.521755,
        10.908868, -0.471719, 6.593878,
        4.117448, -0.524435, 1.206724,
        4.098836, -0.387603, 1.364880,
        5.377553, -0.721461, 12.125469,
        5.386491, -0.931028, 12.116254,
        10.908871, 0.240854, 1.777046,
        12.779829, 0.162731, 1.934165,
        12.779829, -0.162732, 1.934165,
        10.908871, -0.240855, 1.777046,
        10.908871, -0.240855, 1.777046,
        10.890630, -0.094288, 1.926274,
        10.890389, 0.094180, 1.926139,
        10.908871, 0.240854, 1.777046,
        10.908871, 0.240854, 1.777046,
        10.890389, 0.094180, 1.926139,
        10.899607, 0.243173, 6.602761,
        10.908870, 0.452740, 6.593874,
        4.098611, 0.387511, 1.364775,
        10.890389, 0.094180, 1.926139,
        10.890630, -0.094288, 1.926274,
        4.098836, -0.387603, 1.364880,
        10.890389, 0.094180, 1.926139,
        4.098611, 0.387511, 1.364775,
        5.377229, 0.713839, 12.125142,
        10.899607, 0.243173, 6.602761,
        4.098836, -0.387603, 1.364880,
        10.890630, -0.094288, 1.926274,
        10.899931, -0.262152, 6.603094,
        5.377553, -0.721461, 12.125469,
        10.908868, -0.471719, 6.593878,
        10.899931, -0.262152, 6.603094,
        10.890630, -0.094288, 1.926274,
        10.908871, -0.240855, 1.777046,
        10.908870, 0.452740, 6.593874,
        10.899607, 0.243173, 6.602761,
        5.377229, 0.713839, 12.125142,
        5.386491, 0.923407, 12.116254,
        4.117448, 0.524435, 1.206724,
        4.098611, 0.387511, 1.364775,
        4.098836, -0.387603, 1.364880,
        4.117448, -0.524435, 1.206724,
        5.386491, -0.931028, 12.116254,
        5.377553, -0.721461, 12.125469,
        10.899931, -0.262152, 6.603094,
        10.908868, -0.471719, 6.593878,
        5.386491, 0.923407, 12.116254,
        5.377229, 0.713839, 12.125142,
        4.098611, 0.387511, 1.364775,
        4.117448, 0.524435, 1.206724,
        1.212055, 3.387590, 16.887638,
        0.639646, 1.358278, 1.052764,
        0.564751, 3.151939, 1.191179,
        1.000086, 4.655510, 13.191395,
        0.232581, 11.107022, 1.805074,
        0.162732, 12.779829, 1.934165,
        0.431647, 12.787613, 7.521755,
        0.447751, 11.107020, 6.634337,
        -0.431646, 12.787613, 7.521755,
        0.431647, 12.787613, 7.521755,
        0.162732, 12.779829, 1.934165,
        -0.162731, 12.779829, 1.934165,
        -1.212055, 3.387590, 16.887638,
        1.212055, 3.387590, 16.887638,
        0.431647, 12.787613, 7.521755,
        -0.431646, 12.787613, 7.521755,
        0.639646, 1.358278, 1.052764,
        -0.639646, 1.358278, 1.052764,
        -0.564750, 3.151938, 1.191179,
        0.564751, 3.151939, 1.191179,
        -0.564750, 3.151938, 1.191179,
        -0.639646, 1.358278, 1.052764,
        -1.212055, 3.387590, 16.887638,
        -0.431646, 12.787613, 7.521755,
        -0.162731, 12.779829, 1.934165,
        -0.232581, 11.107022, 1.805074,
        -0.464878, 11.107021, 6.634337,
        -1.005847, 4.655510, 13.191395,
        -0.409355, 3.131968, 1.371123,
        -0.767699, 4.645381, 13.201828,
        -0.226730, 11.096891, 6.644772,
        -0.066326, 11.087394, 1.975073,
        0.447751, 11.107020, 6.634337,
        1.000086, 4.655510, 13.191395,
        0.761939, 4.645071, 13.201531,
        0.209603, 11.096581, 6.644476,
        -1.005847, 4.655510, 13.191395,
        -0.464878, 11.107021, 6.634337,
        -0.226730, 11.096891, 6.644772,
        -0.767699, 4.645381, 13.201828,
        0.232581, 11.107022, 1.805074,
        -0.232581, 11.107022, 1.805074,
        -0.162731, 12.779829, 1.934165,
        0.162732, 12.779829, 1.934165,
        -0.232581, 11.107022, 1.805074,
        0.232581, 11.107022, 1.805074,
        0.066228, 11.087168, 1.974951,
        -0.066326, 11.087394, 1.975073,
        0.409273, 3.131755, 1.371028,
        -0.409355, 3.131968, 1.371123,
        -0.066326, 11.087394, 1.975073,
        0.066228, 11.087168, 1.974951,
        0.066228, 11.087168, 1.974951,
        0.209603, 11.096581, 6.644476,
        0.761939, 4.645071, 13.201531,
        0.409273, 3.131755, 1.371028,
        0.564751, 3.151939, 1.191179,
        -0.564750, 3.151938, 1.191179,
        -0.409355, 3.131968, 1.371123,
        0.409273, 3.131755, 1.371028,
        -0.564750, 3.151938, 1.191179,
        -1.005847, 4.655510, 13.191395,
        -0.767699, 4.645381, 13.201828,
        -0.409355, 3.131968, 1.371123,
        -0.464878, 11.107021, 6.634337,
        -0.232581, 11.107022, 1.805074,
        -0.066326, 11.087394, 1.975073,
        -0.226730, 11.096891, 6.644772,
        1.000086, 4.655510, 13.191395,
        0.564751, 3.151939, 1.191179,
        0.409273, 3.131755, 1.371028,
        0.761939, 4.645071, 13.201531,
        0.232581, 11.107022, 1.805074,
        0.447751, 11.107020, 6.634337,
        0.209603, 11.096581, 6.644476,
        0.066228, 11.087168, 1.974951,
        0.431646, -12.787613, 7.521755,
        0.162731, -12.779829, 1.934165,
        0.232580, -11.107022, 1.805074,
        0.447750, -11.107020, 6.634337,
        0.564750, -3.151939, 1.191179,
        0.639646, -1.358278, 1.052764,
        1.212055, -3.387590, 16.887638,
        1.000085, -4.655510, 13.191395,
        -0.431647, -12.787613, 7.521755,
        -0.162733, -12.779829, 1.934165,
        0.162731, -12.779829, 1.934165,
        0.431646, -12.787613, 7.521755,
        -1.212055, -3.387590, 16.887638,
        -0.431647, -12.787613, 7.521755,
        0.431646, -12.787613, 7.521755,
        1.212055, -3.387590, 16.887638,
        0.639646, -1.358278, 1.052764,
        0.564750, -3.151939, 1.191179,
        -0.564751, -3.151938, 1.191179,
        -0.639646, -1.358278, 1.052764,
        -1.212055, -3.387590, 16.887638,
        -0.639646, -1.358278, 1.052764,
        -0.564751, -3.151938, 1.191179,
        -1.005847, -4.655510, 13.191395,
        -0.232582, -11.107022, 1.805074,
        -0.162733, -12.779829, 1.934165,
        -0.431647, -12.787613, 7.521755,
        -0.464879, -11.107021, 6.634337,
        -0.409355, -3.131968, 1.371123,
        -0.066327, -11.087394, 1.975073,
        -0.226731, -11.096891, 6.644772,
        -0.767699, -4.645381, 13.201828,
        0.447750, -11.107020, 6.634337,
        0.209602, -11.096581, 6.644476,
        0.761938, -4.645071, 13.201531,
        1.000085, -4.655510, 13.191395,
        -1.005847, -4.655510, 13.191395,
        -0.767699, -4.645381, 13.201828,
        -0.226731, -11.096891, 6.644772,
        -0.464879, -11.107021, 6.634337,
        0.232580, -11.107022, 1.805074,
        0.162731, -12.779829, 1.934165,
        -0.162733, -12.779829, 1.934165,
        -0.232582, -11.107022, 1.805074,
        -0.232582, -11.107022, 1.805074,
        -0.066327, -11.087394, 1.975073,
        0.066227, -11.087168, 1.974951,
        0.232580, -11.107022, 1.805074,
        0.409273, -3.131755, 1.371028,
        0.066227, -11.087168, 1.974951,
        -0.066327, -11.087394, 1.975073,
        -0.409355, -3.131968, 1.371123,
        0.066227, -11.087168, 1.974951,
        0.409273, -3.131755, 1.371028,
        0.761938, -4.645071, 13.201531,
        0.209602, -11.096581, 6.644476,
        0.564750, -3.151939, 1.191179,
        0.409273, -3.131755, 1.371028,
        -0.409355, -3.131968, 1.371123,
        -0.564751, -3.151938, 1.191179,
        -0.564751, -3.151938, 1.191179,
        -0.409355, -3.131968, 1.371123,
        -0.767699, -4.645381, 13.201828,
        -1.005847, -4.655510, 13.191395,
        -0.464879, -11.107021, 6.634337,
        -0.226731, -11.096891, 6.644772,
        -0.066327, -11.087394, 1.975073,
        -0.232582, -11.107022, 1.805074,
        1.000085, -4.655510, 13.191395,
        0.761938, -4.645071, 13.201531,
        0.409273, -3.131755, 1.371028,
        0.564750, -3.151939, 1.191179,
        0.232580, -11.107022, 1.805074,
        0.066227, -11.087168, 1.974951,
        0.209602, -11.096581, 6.644476,
        0.447750, -11.107020, 6.634337,
        -0.401785, 0.553010, 52.896873,
        -0.650102, 0.211231, 52.896873,
        0.000000, 0.000000, 52.896877,
        -0.401785, -0.553010, 52.896873,
        0.000000, -0.683558, 52.896873,
        0.000000, 0.000000, 52.896877,
        0.650102, -0.211231, 52.896873,
        0.650102, 0.211231, 52.896873,
        0.000000, 0.000000, 52.896877,
        0.000000, 0.683558, 52.896873,
        -0.401785, 0.553010, 52.896873,
        0.000000, 0.000000, 52.896877,
        -0.650102, -0.211231, 52.896873,
        -0.401785, -0.553010, 52.896873,
        0.000000, 0.000000, 52.896877,
        0.650102, 0.211231, 52.896873,
        0.401785, 0.553010, 52.896873,
        0.000000, 0.000000, 52.896877,
        0.401785, -0.553010, 52.896873,
        0.000000, 0.000000, 52.896877,
        -0.650102, 0.211231, 52.896873,
        -0.650102, -0.211231, 52.896873,
        0.000000, 0.000000, 52.896877,
        0.401785, 0.553010, 52.896873,
        0.000000, 0.000000, 52.896877,
        0.401785, -0.553010, 52.896873,
        0.650102, -0.211231, 52.896873,
        0.000000, 0.000000, 52.896877,
        -1.568050, -5.592232, 35.058998,
        -1.568050, -5.485189, 35.058998,
        -1.568050, -5.485189, 36.332207,
        -1.568050, -5.592233, 36.332207,
        0.605442, -5.592232, 37.232494,
        0.699711, -5.592232, 37.460075,
        -0.762029, -5.592233, 37.460079,
        -0.667760, -5.592232, 37.232494,
        1.505732, -5.592231, 36.332207,
        1.733316, -5.592231, 36.426472,
        0.699711, -5.592232, 37.460075,
        0.605442, -5.592232, 37.232494,
        1.505732, -5.592231, 35.058998,
        1.733316, -5.592231, 34.964733,
        1.733316, -5.592231, 36.426472,
        1.505732, -5.592231, 36.332207,
        0.605442, -5.592231, 34.158707,
        0.699711, -5.592231, 33.931126,
        1.733316, -5.592231, 34.964733,
        1.505732, -5.592231, 35.058998,
        -0.667760, -5.592231, 34.158707,
        -0.762028, -5.592232, 33.931126,
        0.699711, -5.592231, 33.931126,
        0.605442, -5.592231, 34.158707,
        -1.568050, -5.592232, 35.058998,
        -1.795634, -5.592232, 34.964733,
        -0.762028, -5.592232, 33.931126,
        -0.667760, -5.592231, 34.158707,
        -1.568050, -5.592233, 36.332207,
        -1.795634, -5.592233, 36.426472,
        -1.795634, -5.592232, 34.964733,
        -1.568050, -5.592232, 35.058998,
        -0.667760, -5.592232, 37.232494,
        -0.762029, -5.592233, 37.460079,
        -1.795634, -5.592233, 36.426472,
        -1.568050, -5.592233, 36.332207,
        -1.795634, -5.592233, 36.426472,
        -1.795634, -4.641595, 36.426472,
        -1.795634, -4.641594, 34.964733,
        -1.795634, -5.592232, 34.964733,
        -0.762028, -5.592232, 33.931126,
        -0.762029, -4.641594, 33.931126,
        0.699710, -4.641593, 33.931126,
        0.699711, -5.592231, 33.931126,
        1.733316, -5.592231, 34.964733,
        1.733316, -4.641593, 34.964733,
        1.733316, -4.641593, 36.426472,
        1.733316, -5.592231, 36.426472,
        0.699711, -5.592232, 37.460075,
        0.699711, -4.641594, 37.460075,
        -0.762029, -4.641595, 37.460079,
        -0.762029, -5.592233, 37.460079,
        -0.762029, -5.592233, 37.460079,
        -0.762029, -4.641595, 37.460079,
        -1.795634, -4.641595, 36.426472,
        -1.795634, -5.592233, 36.426472,
        -1.795634, -5.592232, 34.964733,
        -1.795634, -4.641594, 34.964733,
        -0.762029, -4.641594, 33.931126,
        -0.762028, -5.592232, 33.931126,
        0.699711, -5.592231, 33.931126,
        0.699710, -4.641593, 33.931126,
        1.733316, -4.641593, 34.964733,
        1.733316, -5.592231, 34.964733,
        1.733316, -5.592231, 36.426472,
        1.733316, -4.641593, 36.426472,
        0.699711, -4.641594, 37.460075,
        0.699711, -5.592232, 37.460075,
        1.505732, -5.485188, 36.332207,
        0.605442, -5.485188, 37.232494,
        -0.667760, -5.485188, 37.232494,
        -1.568050, -5.485189, 36.332207,
        -1.568050, -5.485189, 35.058998,
        -0.667760, -5.485188, 34.158707,
        0.605442, -5.485188, 34.158707,
        1.505732, -5.485187, 35.058998,
        0.605442, -5.592231, 34.158707,
        0.605442, -5.485188, 34.158707,
        -0.667760, -5.485188, 34.158707,
        -0.667760, -5.592231, 34.158707,
        1.505732, -5.592231, 36.332207,
        1.505732, -5.485188, 36.332207,
        1.505732, -5.485187, 35.058998,
        1.505732, -5.592231, 35.058998,
        -0.667760, -5.592232, 37.232494,
        -0.667760, -5.485188, 37.232494,
        0.605442, -5.485188, 37.232494,
        0.605442, -5.592232, 37.232494,
        -1.568050, -5.592233, 36.332207,
        -1.568050, -5.485189, 36.332207,
        -0.667760, -5.485188, 37.232494,
        -0.667760, -5.592232, 37.232494,
        -0.667760, -5.592231, 34.158707,
        -0.667760, -5.485188, 34.158707,
        -1.568050, -5.485189, 35.058998,
        -1.568050, -5.592232, 35.058998,
        1.505732, -5.592231, 35.058998,
        1.505732, -5.485187, 35.058998,
        0.605442, -5.485188, 34.158707,
        0.605442, -5.592231, 34.158707,
        0.605442, -5.592232, 37.232494,
        0.605442, -5.485188, 37.232494,
        1.505732, -5.485188, 36.332207,
        1.505732, -5.592231, 36.332207,
        -1.568054, 5.592231, 35.058998,
        -1.568054, 5.592232, 36.332207,
        -1.568054, 5.485188, 36.332207,
        -1.568054, 5.485188, 35.058998,
        0.605439, 5.592232, 37.232494,
        -0.667764, 5.592232, 37.232494,
        -0.762032, 5.592232, 37.460079,
        0.699707, 5.592232, 37.460075,
        1.505729, 5.592232, 36.332207,
        0.605439, 5.592232, 37.232494,
        0.699707, 5.592232, 37.460075,
        1.733313, 5.592232, 36.426472,
        1.505729, 5.592232, 35.058998,
        1.505729, 5.592232, 36.332207,
        1.733313, 5.592232, 36.426472,
        1.733313, 5.592232, 34.964733,
        0.605439, 5.592231, 34.158707,
        1.505729, 5.592232, 35.058998,
        1.733313, 5.592232, 34.964733,
        0.699707, 5.592231, 33.931126,
        -0.667764, 5.592231, 34.158707,
        0.605439, 5.592231, 34.158707,
        0.699707, 5.592231, 33.931126,
        -0.762032, 5.592231, 33.931126,
        -1.568054, 5.592231, 35.058998,
        -0.667764, 5.592231, 34.158707,
        -0.762032, 5.592231, 33.931126,
        -1.795638, 5.592231, 34.964733,
        -1.568054, 5.592232, 36.332207,
        -1.568054, 5.592231, 35.058998,
        -1.795638, 5.592231, 34.964733,
        -1.795638, 5.592232, 36.426472,
        -0.667764, 5.592232, 37.232494,
        -1.568054, 5.592232, 36.332207,
        -1.795638, 5.592232, 36.426472,
        -0.762032, 5.592232, 37.460079,
        -1.795638, 5.592232, 36.426472,
        -1.795638, 5.592231, 34.964733,
        -1.795637, 4.641593, 34.964733,
        -1.795637, 4.641594, 36.426472,
        -0.762032, 5.592231, 33.931126,
        0.699707, 5.592231, 33.931126,
        0.699707, 4.641593, 33.931126,
        -0.762032, 4.641593, 33.931126,
        1.733313, 5.592232, 34.964733,
        1.733313, 5.592232, 36.426472,
        1.733313, 4.641594, 36.426472,
        1.733313, 4.641594, 34.964733,
        0.699707, 5.592232, 37.460075,
        -0.762032, 5.592232, 37.460079,
        -0.762032, 4.641594, 37.460079,
        0.699708, 4.641594, 37.460075,
        -0.762032, 5.592232, 37.460079,
        -1.795638, 5.592232, 36.426472,
        -1.795637, 4.641594, 36.426472,
        -0.762032, 4.641594, 37.460079,
        -1.795638, 5.592231, 34.964733,
        -0.762032, 5.592231, 33.931126,
        -0.762032, 4.641593, 33.931126,
        -1.795637, 4.641593, 34.964733,
        0.699707, 5.592231, 33.931126,
        1.733313, 5.592232, 34.964733,
        1.733313, 4.641594, 34.964733,
        0.699707, 4.641593, 33.931126,
        1.733313, 5.592232, 36.426472,
        0.699707, 5.592232, 37.460075,
        0.699708, 4.641594, 37.460075,
        1.733313, 4.641594, 36.426472,
        -0.667764, 5.485188, 37.232494,
        0.605439, 5.485188, 37.232494,
        1.505729, 5.485189, 36.332207,
        1.505729, 5.485188, 35.058998,
        0.605439, 5.485188, 34.158707,
        -0.667764, 5.485188, 34.158707,
        -1.568054, 5.485188, 35.058998,
        -1.568054, 5.485188, 36.332207,
        0.605439, 5.592231, 34.158707,
        -0.667764, 5.592231, 34.158707,
        -0.667764, 5.485188, 34.158707,
        0.605439, 5.485188, 34.158707,
        1.505729, 5.592232, 36.332207,
        1.505729, 5.592232, 35.058998,
        1.505729, 5.485188, 35.058998,
        1.505729, 5.485189, 36.332207,
        -0.667764, 5.592232, 37.232494,
        0.605439, 5.592232, 37.232494,
        0.605439, 5.485188, 37.232494,
        -0.667764, 5.485188, 37.232494,
        -1.568054, 5.592232, 36.332207,
        -0.667764, 5.592232, 37.232494,
        -0.667764, 5.485188, 37.232494,
        -1.568054, 5.485188, 36.332207,
        -0.667764, 5.592231, 34.158707,
        -1.568054, 5.592231, 35.058998,
        -1.568054, 5.485188, 35.058998,
        -0.667764, 5.485188, 34.158707,
        1.505729, 5.592232, 35.058998,
        0.605439, 5.592231, 34.158707,
        0.605439, 5.485188, 34.158707,
        1.505729, 5.485188, 35.058998,
        0.605439, 5.592232, 37.232494,
        1.505729, 5.592232, 36.332207,
        1.505729, 5.485189, 36.332207,
        0.605439, 5.485188, 37.232494

    ];


    // store array of vertex positions in the vertex_position_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // enable position_attrib in our GPU program
    gl.enableVertexAttribArray(position_attrib);
    // attach vertex_position_buffer to the position_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(position_attrib, 3, gl.FLOAT, false, 0, 0);

    // create buffer to store vertex normals (vector pointing perpendicular to surface)
    let vertex_normal_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_normal_buffer);
    // create array of 3D vector values (each set of 3 values specifies a normalized vector: x, y, z)

    let normals = [
        -0.307384, -0.946029, 0.102683,
        -0.307384, -0.946029, 0.102683,
        -0.307384, -0.946029, 0.102683,
        -0.307384, -0.946029, 0.102683,
        -0.804741, -0.584678, 0.102683,
        -0.804741, -0.584678, 0.102683,
        -0.804741, -0.584678, 0.102683,
        -0.804741, -0.584678, 0.102683,
        -0.994714, 0.000000, 0.102683,
        -0.994714, 0.000000, 0.102683,
        -0.994714, 0.000000, 0.102683,
        -0.994714, 0.000000, 0.102683,
        -0.804741, 0.584678, 0.102683,
        -0.804741, 0.584678, 0.102683,
        -0.804741, 0.584678, 0.102683,
        -0.804741, 0.584678, 0.102683,
        -0.307384, 0.946029, 0.102683,
        -0.307384, 0.946029, 0.102683,
        -0.307384, 0.946029, 0.102683,
        -0.307384, 0.946029, 0.102683,
        -0.249271, 0.767176, 0.591020,
        -0.249271, 0.767176, 0.591020,
        -0.249271, 0.767176, 0.591020,
        -0.249271, 0.767176, 0.591020,
        -0.652599, 0.474141, 0.591020,
        -0.652599, 0.474141, 0.591020,
        -0.652599, 0.474141, 0.591020,
        -0.652599, 0.474141, 0.591020,
        -0.806657, 0.000000, 0.591020,
        -0.806657, 0.000000, 0.591020,
        -0.806657, 0.000000, 0.591020,
        -0.806657, 0.000000, 0.591020,
        -0.652599, -0.474141, 0.591020,
        -0.652599, -0.474141, 0.591020,
        -0.652599, -0.474141, 0.591020,
        -0.652599, -0.474141, 0.591020,
        -0.249270, -0.767177, 0.591020,
        -0.249270, -0.767177, 0.591019,
        -0.249270, -0.767177, 0.591020,
        -0.249271, -0.767176, 0.591020,
        -0.301099, -0.926687, 0.224922,
        -0.301099, -0.926687, 0.224923,
        -0.301099, -0.926687, 0.224922,
        -0.301099, -0.926687, 0.224922,
        -0.283370, -0.872127, 0.398869,
        -0.283370, -0.872127, 0.398869,
        -0.283370, -0.872127, 0.398869,
        -0.283370, -0.872127, 0.398869,
        -0.788287, -0.572724, 0.224922,
        -0.788287, -0.572724, 0.224922,
        -0.788287, -0.572724, 0.224922,
        -0.788287, -0.572724, 0.224922,
        -0.741875, -0.539004, 0.398869,
        -0.741875, -0.539004, 0.398869,
        -0.741875, -0.539004, 0.398869,
        -0.741875, -0.539004, 0.398869,
        -0.974377, 0.000000, 0.224922,
        -0.974377, 0.000000, 0.224922,
        -0.974377, 0.000000, 0.224922,
        -0.974377, 0.000000, 0.224922,
        -0.917008, 0.000000, 0.398869,
        -0.917008, 0.000000, 0.398869,
        -0.917008, 0.000000, 0.398869,
        -0.917008, 0.000000, 0.398869,
        -0.788287, 0.572724, 0.224922,
        -0.788287, 0.572724, 0.224922,
        -0.788287, 0.572724, 0.224922,
        -0.788287, 0.572724, 0.224922,
        -0.741875, 0.539004, 0.398869,
        -0.741875, 0.539004, 0.398869,
        -0.741875, 0.539004, 0.398869,
        -0.741875, 0.539004, 0.398869,
        -0.301099, 0.926687, 0.224922,
        -0.301099, 0.926687, 0.224922,
        -0.301099, 0.926687, 0.224922,
        -0.301099, 0.926687, 0.224922,
        -0.283371, 0.872126, 0.398869,
        -0.283371, 0.872126, 0.398869,
        -0.283371, 0.872126, 0.398869,
        -0.283371, 0.872126, 0.398869,
        -0.307787, 0.947271, -0.089129,
        -0.307787, 0.947271, -0.089129,
        -0.307787, 0.947271, -0.089129,
        -0.307787, 0.947271, -0.089129,
        -0.806562, 0.584344, -0.089440,
        -0.805797, 0.585446, -0.089129,
        -0.810654, 0.578393, -0.091114,
        -0.811581, 0.577031, -0.091495,
        -0.996006, 0.000000, -0.089282,
        -0.996006, 0.000000, -0.089282,
        -0.996006, 0.000000, -0.089282,
        -0.996006, 0.000000, -0.089282,
        -0.806455, -0.584265, -0.090917,
        -0.805643, -0.585334, -0.091233,
        -0.810792, -0.578495, -0.089219,
        -0.811777, -0.577173, -0.088830,
        -0.307787, -0.947271, -0.089129,
        -0.307787, -0.947271, -0.089129,
        -0.307787, -0.947271, -0.089129,
        -0.307787, -0.947271, -0.089129,
        -0.308873, -0.950613, -0.030537,
        -0.308873, -0.950613, -0.030537,
        -0.308873, -0.950613, -0.030538,
        -0.308873, -0.950613, -0.030538,
        -0.808640, -0.587511, -0.030537,
        -0.808640, -0.587511, -0.030537,
        -0.808640, -0.587511, -0.030537,
        -0.808640, -0.587511, -0.030537,
        -0.999534, 0.000000, -0.030537,
        -0.999534, 0.000000, -0.030537,
        -0.999534, 0.000000, -0.030537,
        -0.999534, 0.000000, -0.030537,
        -0.808640, 0.587511, -0.030537,
        -0.808640, 0.587511, -0.030537,
        -0.808640, 0.587511, -0.030537,
        -0.808640, 0.587511, -0.030537,
        -0.308873, 0.950613, -0.030538,
        -0.308873, 0.950613, -0.030538,
        -0.308873, 0.950613, -0.030537,
        -0.308873, 0.950613, -0.030537,
        -0.807897, 0.576045, -0.124397,
        -0.808666, 0.574931, -0.124554,
        -0.793911, 0.595759, -0.121561,
        -0.792275, 0.597999, -0.121231,
        -0.306594, -0.943601, -0.124971,
        -0.306594, -0.943601, -0.124971,
        -0.306594, -0.943601, -0.124971,
        -0.306594, -0.943601, -0.124971,
        -0.306594, 0.943601, -0.124971,
        -0.306594, 0.943601, -0.124971,
        -0.306594, 0.943601, -0.124971,
        -0.306594, 0.943601, -0.124971,
        -0.808075, -0.576171, -0.122644,
        -0.808875, -0.575081, -0.122489,
        -0.793524, -0.595484, -0.125372,
        -0.791830, -0.597670, -0.125679,
        -0.042481, 0.998162, -0.043214,
        -0.045183, 0.998106, -0.041758,
        -0.045183, 0.998106, -0.041758,
        -0.043688, 0.998149, -0.042313,
        -0.042986, 0.997960, -0.047202,
        -0.045702, 0.997797, -0.048085,
        -0.035700, 0.998272, -0.046679,
        -0.034194, 0.998369, -0.045723,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.002556, 0.000716, -0.999997,
        0.000000, 0.000000, -1.000000,
        0.000932, 0.000261, -1.000000,
        0.003180, 0.000891, -0.999995,
        0.003545, 0.000000, -0.999994,
        0.003545, 0.000000, -0.999994,
        0.003545, 0.000000, -0.999994,
        0.003545, 0.000000, -0.999994,
        0.001366, 0.000189, -0.999999,
        0.002732, -0.001985, -0.999994,
        0.002258, -0.001231, -0.999997,
        0.001019, 0.000740, -0.999999,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        -0.265467, 0.817025, 0.511857,
        -0.265467, 0.817025, 0.511857,
        -0.265467, 0.817025, 0.511856,
        -0.265467, 0.817025, 0.511856,
        -0.695003, -0.504949, 0.511856,
        -0.695003, -0.504949, 0.511856,
        -0.695003, -0.504949, 0.511856,
        -0.695003, -0.504949, 0.511856,
        -0.859071, 0.000000, 0.511856,
        -0.859071, 0.000000, 0.511856,
        -0.859071, 0.000000, 0.511856,
        -0.859071, 0.000000, 0.511856,
        -0.695003, 0.504949, 0.511856,
        -0.695003, 0.504949, 0.511856,
        -0.695003, 0.504949, 0.511856,
        -0.695003, 0.504949, 0.511856,
        -0.265467, -0.817025, 0.511856,
        -0.265467, -0.817025, 0.511856,
        -0.265467, -0.817025, 0.511857,
        -0.265467, -0.817025, 0.511857,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.695443, 0.000000, -0.718581,
        0.695443, 0.000000, -0.718581,
        0.695443, 0.000000, -0.718581,
        0.562626, -0.408771, -0.718581,
        0.562626, -0.408771, -0.718581,
        0.562626, -0.408771, -0.718581,
        0.214903, 0.661407, -0.718580,
        0.214903, 0.661407, -0.718580,
        0.214903, 0.661407, -0.718580,
        0.214903, -0.661407, -0.718580,
        0.214903, -0.661407, -0.718580,
        0.214903, -0.661407, -0.718580,
        0.562626, 0.408771, -0.718581,
        0.562626, 0.408771, -0.718581,
        0.562626, 0.408771, -0.718581,
        -0.999999, 0.000000, -0.001393,
        -0.999999, 0.000000, -0.001393,
        -0.999999, 0.000000, -0.001393,
        -0.999999, 0.000000, -0.001393,
        -0.705819, 0.000000, 0.708392,
        -0.705819, 0.000000, 0.708392,
        -0.705819, 0.000000, 0.708392,
        -0.705819, 0.000000, 0.708392,
        -0.083683, 0.000000, -0.996493,
        -0.083683, 0.000000, -0.996492,
        -0.083683, 0.000000, -0.996492,
        -0.083683, 0.000000, -0.996492,
        -0.044791, -0.998123, -0.041767,
        -0.045183, -0.998106, -0.041758,
        -0.041726, -0.998263, -0.041598,
        -0.043322, -0.998073, -0.044432,
        -0.045702, -0.997797, -0.048085,
        -0.045532, -0.997808, -0.048030,
        -0.043356, -0.998060, -0.044684,
        -0.040958, -0.998294, -0.041603,
        -0.962675, 0.248778, -0.106611,
        -0.992390, 0.047321, -0.113675,
        -0.992309, 0.049087, -0.113634,
        -0.961410, 0.253721, -0.106376,
        -0.083683, 0.000000, -0.996492,
        -0.083683, 0.000000, -0.996492,
        -0.083683, 0.000000, -0.996492,
        -0.083683, 0.000000, -0.996492,
        0.992578, -0.000638, -0.121605,
        0.992405, 0.000000, -0.123017,
        0.992471, -0.000243, -0.122478,
        0.992770, -0.001352, -0.120024,
        0.992904, 0.118899, -0.001963,
        0.999026, 0.044075, -0.001939,
        0.998954, 0.045678, -0.001940,
        0.992399, 0.123047, -0.001964,
        -0.082381, -0.000121, -0.996601,
        -0.082381, -0.000112, -0.996601,
        -0.082349, -0.000574, -0.996603,
        -0.082346, -0.000609, -0.996604,
        -0.048204, 0.998238, -0.034592,
        -0.053162, 0.998076, -0.031903,
        -0.048344, 0.998234, -0.034517,
        -0.046071, 0.998298, -0.035750,
        -0.046340, -0.998267, -0.036259,
        -0.046526, -0.998250, -0.036501,
        -0.046354, -0.998266, -0.036276,
        -0.046082, -0.998291, -0.035923,
        0.999022, -0.044214, 0.000328,
        0.993017, -0.117835, -0.005648,
        0.993188, -0.116391, -0.005531,
        0.999091, -0.042626, 0.000457,
        0.707053, 0.001263, -0.707160,
        0.707053, 0.001257, -0.707160,
        0.707053, 0.001257, -0.707160,
        0.707053, 0.001263, -0.707160,
        -0.992983, 0.000244, 0.118257,
        -0.993147, 0.000000, 0.116871,
        -0.993132, 0.000023, 0.117002,
        -0.992941, 0.000305, 0.118606,
        0.707145, 0.000935, -0.707068,
        0.707146, 0.000939, -0.707067,
        0.707146, 0.000939, -0.707067,
        0.707145, 0.000935, -0.707068,
        -0.991928, -0.050536, -0.116300,
        -0.962501, -0.251054, -0.102781,
        -0.962906, -0.249444, -0.102910,
        -0.992004, -0.048780, -0.116397,
        0.307384, -0.946029, 0.102683,
        0.307384, -0.946029, 0.102683,
        0.307384, -0.946029, 0.102683,
        0.307384, -0.946029, 0.102683,
        0.804741, -0.584678, 0.102683,
        0.804741, -0.584678, 0.102683,
        0.804741, -0.584678, 0.102683,
        0.804741, -0.584678, 0.102683,
        0.994714, 0.000000, 0.102683,
        0.994714, 0.000000, 0.102683,
        0.994714, 0.000000, 0.102683,
        0.994714, 0.000000, 0.102683,
        0.804741, 0.584678, 0.102683,
        0.804741, 0.584678, 0.102683,
        0.804741, 0.584678, 0.102683,
        0.804741, 0.584678, 0.102683,
        0.307384, 0.946029, 0.102683,
        0.307384, 0.946029, 0.102683,
        0.307384, 0.946029, 0.102683,
        0.307384, 0.946029, 0.102683,
        0.249271, 0.767176, 0.591020,
        0.249271, 0.767176, 0.591020,
        0.249271, 0.767176, 0.591020,
        0.249271, 0.767176, 0.591020,
        0.652599, 0.474141, 0.591020,
        0.652599, 0.474141, 0.591020,
        0.652599, 0.474141, 0.591020,
        0.652599, 0.474141, 0.591020,
        0.806657, 0.000000, 0.591020,
        0.806657, 0.000000, 0.591020,
        0.806657, 0.000000, 0.591020,
        0.806657, 0.000000, 0.591020,
        0.652599, -0.474141, 0.591020,
        0.652599, -0.474141, 0.591020,
        0.652599, -0.474141, 0.591020,
        0.652599, -0.474141, 0.591020,
        0.249270, -0.767177, 0.591020,
        0.249271, -0.767176, 0.591020,
        0.249270, -0.767177, 0.591020,
        0.249270, -0.767177, 0.591019,
        0.301099, -0.926687, 0.224922,
        0.301099, -0.926687, 0.224922,
        0.301099, -0.926687, 0.224922,
        0.301099, -0.926687, 0.224923,
        0.283370, -0.872127, 0.398869,
        0.283370, -0.872127, 0.398869,
        0.283370, -0.872127, 0.398869,
        0.283370, -0.872127, 0.398869,
        0.788287, -0.572724, 0.224922,
        0.788287, -0.572724, 0.224922,
        0.788287, -0.572724, 0.224922,
        0.788287, -0.572724, 0.224922,
        0.741875, -0.539004, 0.398869,
        0.741875, -0.539004, 0.398869,
        0.741875, -0.539004, 0.398869,
        0.741875, -0.539004, 0.398869,
        0.974377, 0.000000, 0.224922,
        0.974377, 0.000000, 0.224922,
        0.974377, 0.000000, 0.224922,
        0.974377, 0.000000, 0.224922,
        0.917008, 0.000000, 0.398869,
        0.917008, 0.000000, 0.398869,
        0.917008, 0.000000, 0.398869,
        0.917008, 0.000000, 0.398869,
        0.788287, 0.572724, 0.224922,
        0.788287, 0.572724, 0.224922,
        0.788287, 0.572724, 0.224922,
        0.788287, 0.572724, 0.224922,
        0.741875, 0.539004, 0.398869,
        0.741875, 0.539004, 0.398869,
        0.741875, 0.539004, 0.398869,
        0.741875, 0.539004, 0.398869,
        0.301099, 0.926687, 0.224922,
        0.301099, 0.926687, 0.224922,
        0.301099, 0.926687, 0.224922,
        0.301099, 0.926687, 0.224922,
        0.283371, 0.872126, 0.398869,
        0.283371, 0.872126, 0.398869,
        0.283371, 0.872126, 0.398869,
        0.283371, 0.872126, 0.398869,
        0.307787, 0.947271, -0.089129,
        0.307787, 0.947271, -0.089129,
        0.307787, 0.947271, -0.089129,
        0.307787, 0.947271, -0.089129,
        0.806562, 0.584344, -0.089440,
        0.811581, 0.577031, -0.091495,
        0.810654, 0.578393, -0.091114,
        0.805797, 0.585446, -0.089129,
        0.996006, 0.000000, -0.089282,
        0.996006, 0.000000, -0.089282,
        0.996006, 0.000000, -0.089282,
        0.996006, 0.000000, -0.089282,
        0.806455, -0.584265, -0.090917,
        0.811776, -0.577172, -0.088830,
        0.810792, -0.578495, -0.089219,
        0.805643, -0.585334, -0.091233,
        0.307787, -0.947271, -0.089129,
        0.307787, -0.947271, -0.089129,
        0.307787, -0.947271, -0.089129,
        0.307787, -0.947271, -0.089129,
        0.308873, -0.950613, -0.030537,
        0.308873, -0.950613, -0.030538,
        0.308873, -0.950613, -0.030538,
        0.308873, -0.950613, -0.030537,
        0.808640, -0.587511, -0.030537,
        0.808640, -0.587511, -0.030537,
        0.808640, -0.587511, -0.030537,
        0.808640, -0.587511, -0.030537,
        0.999534, 0.000000, -0.030537,
        0.999534, 0.000000, -0.030537,
        0.999534, 0.000000, -0.030537,
        0.999534, 0.000000, -0.030537,
        0.808640, 0.587511, -0.030537,
        0.808640, 0.587511, -0.030537,
        0.808640, 0.587511, -0.030537,
        0.808640, 0.587511, -0.030537,
        0.308873, 0.950613, -0.030538,
        0.308873, 0.950613, -0.030537,
        0.308873, 0.950613, -0.030537,
        0.308873, 0.950613, -0.030538,
        0.807897, 0.576045, -0.124397,
        0.792275, 0.597999, -0.121231,
        0.793911, 0.595759, -0.121561,
        0.808666, 0.574931, -0.124554,
        0.306594, -0.943601, -0.124971,
        0.306594, -0.943601, -0.124971,
        0.306594, -0.943601, -0.124971,
        0.306594, -0.943601, -0.124971,
        0.306594, 0.943601, -0.124971,
        0.306594, 0.943601, -0.124971,
        0.306594, 0.943601, -0.124971,
        0.306594, 0.943601, -0.124971,
        0.808075, -0.576171, -0.122644,
        0.791830, -0.597670, -0.125679,
        0.793524, -0.595484, -0.125372,
        0.808875, -0.575081, -0.122489,
        0.036376, 0.998238, -0.046873,
        0.045702, 0.997797, -0.048085,
        0.042986, 0.997960, -0.047202,
        0.034220, 0.998328, -0.046591,
        0.045183, 0.998106, -0.041758,
        0.045183, 0.998106, -0.041758,
        0.042239, 0.998188, -0.042851,
        0.041914, 0.998189, -0.043148,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        -0.002556, 0.000716, -0.999997,
        -0.003180, 0.000891, -0.999995,
        -0.000932, 0.000261, -1.000000,
        0.000000, 0.000000, -1.000000,
        -0.003545, 0.000000, -0.999994,
        -0.003545, 0.000000, -0.999994,
        -0.003545, 0.000000, -0.999994,
        -0.003545, 0.000000, -0.999994,
        -0.001366, 0.000189, -0.999999,
        -0.001019, 0.000740, -0.999999,
        -0.002258, -0.001231, -0.999997,
        -0.002732, -0.001985, -0.999994,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.265467, 0.817025, 0.511856,
        0.265467, 0.817025, 0.511856,
        0.265467, 0.817025, 0.511857,
        0.265467, 0.817025, 0.511857,
        0.695003, -0.504949, 0.511856,
        0.695003, -0.504949, 0.511856,
        0.695003, -0.504949, 0.511856,
        0.695003, -0.504949, 0.511856,
        0.859071, 0.000000, 0.511856,
        0.859071, 0.000000, 0.511856,
        0.859071, 0.000000, 0.511856,
        0.859071, 0.000000, 0.511856,
        0.695003, 0.504949, 0.511856,
        0.695003, 0.504949, 0.511856,
        0.695003, 0.504949, 0.511856,
        0.695003, 0.504949, 0.511856,
        0.265467, -0.817025, 0.511856,
        0.265467, -0.817025, 0.511857,
        0.265467, -0.817025, 0.511856,
        0.265467, -0.817025, 0.511856,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        -0.695443, 0.000000, -0.718581,
        -0.695443, 0.000000, -0.718581,
        -0.695443, 0.000000, -0.718581,
        -0.562626, -0.408771, -0.718581,
        -0.562626, -0.408771, -0.718581,
        -0.562626, -0.408771, -0.718581,
        -0.214903, 0.661407, -0.718580,
        -0.214903, 0.661407, -0.718580,
        -0.214903, 0.661407, -0.718580,
        -0.214903, -0.661407, -0.718580,
        -0.214903, -0.661407, -0.718580,
        -0.214903, -0.661407, -0.718580,
        -0.562626, 0.408771, -0.718581,
        -0.562626, 0.408771, -0.718581,
        -0.562626, 0.408771, -0.718581,
        0.999999, 0.000000, -0.001393,
        0.999999, 0.000000, -0.001393,
        0.999999, 0.000000, -0.001393,
        0.999999, 0.000000, -0.001393,
        0.705819, 0.000000, 0.708392,
        0.705819, 0.000000, 0.708392,
        0.705819, 0.000000, 0.708392,
        0.705819, 0.000000, 0.708392,
        0.083683, 0.000000, -0.996493,
        0.083683, 0.000000, -0.996492,
        0.083683, 0.000000, -0.996492,
        0.083683, 0.000000, -0.996492,
        0.041726, -0.998263, -0.041599,
        0.045183, -0.998106, -0.041758,
        0.044791, -0.998123, -0.041767,
        0.040958, -0.998294, -0.041603,
        0.045532, -0.997808, -0.048030,
        0.045702, -0.997797, -0.048085,
        0.043322, -0.998073, -0.044432,
        0.043356, -0.998060, -0.044684,
        0.962675, 0.248777, -0.106611,
        0.961411, 0.253720, -0.106376,
        0.992309, 0.049087, -0.113634,
        0.992390, 0.047321, -0.113675,
        0.083683, 0.000000, -0.996492,
        0.083683, 0.000000, -0.996492,
        0.083683, 0.000000, -0.996492,
        0.083683, 0.000000, -0.996492,
        -0.992578, -0.000638, -0.121605,
        -0.992770, -0.001352, -0.120024,
        -0.992471, -0.000243, -0.122478,
        -0.992405, 0.000000, -0.123017,
        -0.992904, 0.118899, -0.001963,
        -0.992399, 0.123047, -0.001964,
        -0.998954, 0.045678, -0.001940,
        -0.999026, 0.044075, -0.001939,
        0.082381, -0.000121, -0.996601,
        0.082346, -0.000609, -0.996604,
        0.082349, -0.000574, -0.996603,
        0.082381, -0.000112, -0.996601,
        0.048204, 0.998238, -0.034592,
        0.046071, 0.998298, -0.035750,
        0.048344, 0.998234, -0.034517,
        0.053162, 0.998076, -0.031903,
        0.046340, -0.998267, -0.036259,
        0.046082, -0.998292, -0.035923,
        0.046354, -0.998266, -0.036276,
        0.046526, -0.998250, -0.036501,
        -0.999022, -0.044214, 0.000328,
        -0.999091, -0.042626, 0.000457,
        -0.993188, -0.116391, -0.005531,
        -0.993017, -0.117835, -0.005648,
        -0.707053, 0.001263, -0.707160,
        -0.707053, 0.001263, -0.707160,
        -0.707053, 0.001257, -0.707160,
        -0.707053, 0.001257, -0.707160,
        0.992983, 0.000244, 0.118257,
        0.992941, 0.000305, 0.118606,
        0.993132, 0.000023, 0.117002,
        0.993147, 0.000000, 0.116871,
        -0.707145, 0.000935, -0.707068,
        -0.707145, 0.000935, -0.707068,
        -0.707146, 0.000939, -0.707067,
        -0.707146, 0.000939, -0.707067,
        0.991928, -0.050536, -0.116300,
        0.992004, -0.048779, -0.116397,
        0.962906, -0.249444, -0.102910,
        0.962501, -0.251054, -0.102781,
        0.998171, 0.042323, -0.043164,
        0.998115, 0.044905, -0.041835,
        0.998115, 0.044905, -0.041835,
        0.998160, 0.043390, -0.042358,
        0.997949, 0.043021, -0.047398,
        0.997812, 0.045375, -0.048085,
        0.998268, 0.035573, -0.046866,
        0.998355, 0.034195, -0.046025,
        0.000000, 0.999999, -0.001393,
        0.000000, 0.999999, -0.001393,
        0.000000, 0.999999, -0.001393,
        0.000000, 0.999999, -0.001393,
        0.000000, 0.705819, 0.708392,
        0.000000, 0.705819, 0.708392,
        0.000000, 0.705819, 0.708392,
        0.000000, 0.705819, 0.708392,
        -0.000000, 0.076940, -0.997036,
        0.000000, 0.076941, -0.997036,
        -0.000000, 0.076940, -0.997036,
        -0.000000, 0.076940, -0.997036,
        -0.998127, 0.044637, -0.041832,
        -0.998115, 0.044905, -0.041835,
        -0.998267, 0.041622, -0.041606,
        -0.998075, 0.043244, -0.044462,
        -0.997812, 0.045375, -0.048085,
        -0.997815, 0.045318, -0.048068,
        -0.998048, 0.043428, -0.044870,
        -0.998289, 0.041090, -0.041598,
        -0.998289, 0.046425, -0.035546,
        -0.998243, 0.046879, -0.036233,
        -0.998295, 0.046370, -0.035463,
        -0.998365, 0.045659, -0.034387,
        0.001386, -0.712761, -0.701405,
        0.001390, -0.712761, -0.701405,
        0.001390, -0.712761, -0.701405,
        0.001386, -0.712761, -0.701405,
        0.000406, -0.712837, -0.701329,
        0.000408, -0.712837, -0.701329,
        0.000408, -0.712837, -0.701329,
        0.000406, -0.712837, -0.701330,
        0.000000, 0.076941, -0.997036,
        0.000000, 0.076941, -0.997036,
        0.000000, 0.076941, -0.997036,
        0.000000, 0.076941, -0.997036,
        -0.000629, -0.993366, -0.114993,
        0.000000, -0.993239, -0.116086,
        -0.000400, -0.993320, -0.115392,
        -0.001798, -0.993597, -0.112965,
        -0.000103, 0.075703, -0.997130,
        -0.000095, 0.075703, -0.997130,
        -0.000746, 0.075664, -0.997133,
        -0.000790, 0.075662, -0.997133,
        0.998245, 0.048431, -0.034070,
        0.998057, 0.054190, -0.030754,
        0.998254, 0.048142, -0.034237,
        0.998318, 0.045752, -0.035612,
        0.000214, 0.993770, 0.111447,
        -0.000000, 0.993898, 0.110303,
        0.000022, 0.993885, 0.110420,
        0.000272, 0.993735, 0.111757,
        0.251327, 0.961016, -0.115249,
        0.047529, 0.991334, -0.122463,
        0.049373, 0.991250, -0.122421,
        0.256493, 0.959681, -0.114996,
        -0.044184, -0.999023, 0.000429,
        -0.111821, -0.993714, -0.005379,
        -0.110308, -0.993884, -0.005249,
        -0.042523, -0.999095, 0.000571,
        -0.050604, 0.990840, -0.125199,
        -0.253390, 0.960950, -0.111210,
        -0.251710, 0.961376, -0.111349,
        -0.048771, 0.990919, -0.125301,
        0.112541, -0.993646, -0.001610,
        0.043713, -0.999042, -0.001948,
        0.045391, -0.998967, -0.001940,
        0.116912, -0.993141, -0.001588,
        0.998239, -0.036149, -0.047034,
        0.997812, -0.045375, -0.048085,
        0.997949, -0.043021, -0.047398,
        0.998323, -0.034225, -0.046699,
        0.998115, -0.044905, -0.041835,
        0.998115, -0.044905, -0.041835,
        0.998197, -0.042086, -0.042807,
        0.998194, -0.041948, -0.042994,
        0.000000, -0.999999, -0.001393,
        0.000000, -0.999999, -0.001393,
        0.000000, -0.999999, -0.001393,
        0.000000, -0.999999, -0.001393,
        0.000000, -0.705819, 0.708392,
        0.000000, -0.705819, 0.708392,
        0.000000, -0.705819, 0.708392,
        0.000000, -0.705819, 0.708392,
        -0.000000, -0.076940, -0.997036,
        -0.000000, -0.076940, -0.997036,
        -0.000000, -0.076940, -0.997036,
        0.000000, -0.076941, -0.997036,
        -0.998267, -0.041622, -0.041606,
        -0.998115, -0.044905, -0.041835,
        -0.998127, -0.044637, -0.041832,
        -0.998289, -0.041090, -0.041598,
        -0.997815, -0.045318, -0.048068,
        -0.997812, -0.045375, -0.048085,
        -0.998075, -0.043244, -0.044462,
        -0.998048, -0.043428, -0.044870,
        -0.998289, -0.046425, -0.035546,
        -0.998365, -0.045659, -0.034387,
        -0.998295, -0.046370, -0.035463,
        -0.998243, -0.046878, -0.036233,
        0.001385, 0.712761, -0.701405,
        0.001385, 0.712762, -0.701405,
        0.001390, 0.712761, -0.701405,
        0.001390, 0.712761, -0.701405,
        0.000406, 0.712837, -0.701329,
        0.000406, 0.712837, -0.701329,
        0.000408, 0.712837, -0.701329,
        0.000408, 0.712837, -0.701329,
        0.000000, -0.076941, -0.997036,
        0.000000, -0.076941, -0.997036,
        0.000000, -0.076941, -0.997036,
        0.000000, -0.076941, -0.997036,
        -0.000629, 0.993366, -0.114993,
        -0.001798, 0.993597, -0.112965,
        -0.000400, 0.993320, -0.115392,
        0.000000, 0.993239, -0.116086,
        -0.000103, -0.075703, -0.997130,
        -0.000790, -0.075662, -0.997133,
        -0.000746, -0.075664, -0.997133,
        -0.000095, -0.075703, -0.997130,
        0.998245, -0.048432, -0.034070,
        0.998318, -0.045752, -0.035612,
        0.998254, -0.048142, -0.034237,
        0.998057, -0.054190, -0.030754,
        0.000214, -0.993770, 0.111447,
        0.000272, -0.993735, 0.111757,
        0.000022, -0.993885, 0.110420,
        -0.000000, -0.993898, 0.110303,
        0.251327, -0.961016, -0.115249,
        0.256493, -0.959681, -0.114996,
        0.049373, -0.991250, -0.122421,
        0.047529, -0.991334, -0.122463,
        -0.044184, 0.999023, 0.000429,
        -0.042523, 0.999095, 0.000571,
        -0.110308, 0.993884, -0.005249,
        -0.111821, 0.993714, -0.005379,
        -0.050604, -0.990840, -0.125199,
        -0.048771, -0.990919, -0.125301,
        -0.251710, -0.961376, -0.111349,
        -0.253390, -0.960950, -0.111210,
        0.112541, 0.993646, -0.001610,
        0.116912, 0.993141, -0.001588,
        0.045391, 0.998967, -0.001940,
        0.043713, 0.999042, -0.001948,
        -0.000005, 0.000003, 1.000000,
        -0.000005, 0.000003, 1.000000,
        -0.000005, 0.000003, 1.000000,
        -0.000002, -0.000006, 1.000000,
        -0.000000, -0.000006, 1.000000,
        -0.000002, -0.000006, 1.000000,
        0.000006, 0.000000, 1.000000,
        0.000006, 0.000000, 1.000000,
        0.000006, 0.000000, 1.000000,
        0.000000, 0.000006, 1.000000,
        -0.000002, 0.000006, 1.000000,
        -0.000002, 0.000006, 1.000000,
        -0.000005, -0.000003, 1.000000,
        -0.000005, -0.000003, 1.000000,
        -0.000005, -0.000003, 1.000000,
        0.000005, 0.000003, 1.000000,
        0.000005, 0.000003, 1.000000,
        0.000005, 0.000003, 1.000000,
        0.000002, -0.000006, 1.000000,
        0.000002, -0.000006, 1.000000,
        -0.000006, 0.000000, 1.000000,
        -0.000006, 0.000000, 1.000000,
        -0.000006, 0.000000, 1.000000,
        0.000002, 0.000006, 1.000000,
        0.000002, 0.000006, 1.000000,
        0.000005, -0.000003, 1.000000,
        0.000005, -0.000003, 1.000000,
        0.000005, -0.000003, 1.000000,
        1.000000, 0.000001, 0.000000,
        1.000000, 0.000001, 0.000000,
        1.000000, 0.000001, 0.000000,
        1.000000, 0.000001, 0.000000,
        0.000000, -1.000000, -0.000000,
        0.000000, -1.000000, -0.000000,
        0.000000, -1.000000, -0.000002,
        0.000000, -1.000000, -0.000002,
        0.000000, -1.000000, -0.000001,
        0.000000, -1.000000, -0.000001,
        0.000001, -1.000000, -0.000001,
        0.000001, -1.000000, -0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000002,
        0.000000, -1.000000, 0.000002,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        0.000002, -1.000000, 0.000001,
        0.000002, -1.000000, 0.000001,
        -0.000000, -1.000000, -0.000001,
        -0.000000, -1.000000, -0.000001,
        0.000000, -1.000000, -0.000001,
        0.000000, -1.000000, -0.000001,
        0.000001, -1.000000, -0.000001,
        0.000001, -1.000000, -0.000001,
        0.000000, -1.000000, 0.000000,
        0.000000, -1.000000, 0.000000,
        -1.000000, -0.000000, -0.000000,
        -1.000000, -0.000000, -0.000000,
        -1.000000, -0.000000, -0.000000,
        -1.000000, -0.000000, -0.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        1.000000, 0.000000, 0.000000,
        1.000000, 0.000000, 0.000000,
        1.000000, 0.000000, 0.000000,
        1.000000, 0.000000, 0.000000,
        0.000003, 0.000000, 1.000000,
        0.000003, 0.000000, 1.000000,
        0.000003, 0.000000, 1.000000,
        0.000003, 0.000000, 1.000000,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, -0.707106,
        -0.707107, -0.000000, -0.707106,
        -0.707107, -0.000000, -0.707106,
        -0.707107, -0.000000, -0.707106,
        0.707107, 0.000000, -0.707106,
        0.707107, 0.000000, -0.707106,
        0.707107, 0.000000, -0.707106,
        0.707107, 0.000000, -0.707106,
        0.707106, 0.000000, 0.707107,
        0.707106, 0.000000, 0.707107,
        0.707106, 0.000000, 0.707107,
        0.707106, 0.000000, 0.707107,
        0.000000, -1.000000, -0.000000,
        0.000000, -1.000000, -0.000001,
        0.000000, -1.000000, -0.000000,
        0.000001, -1.000000, 0.000000,
        0.000000, -1.000000, -0.000000,
        0.000000, -1.000000, -0.000002,
        0.000001, -1.000000, -0.000001,
        0.000001, -1.000000, -0.000001,
        0.000000, 0.000000, 1.000000,
        0.000000, 0.000000, 1.000000,
        0.000000, 0.000000, 1.000000,
        0.000000, 0.000000, 1.000000,
        -1.000000, -0.000001, -0.000000,
        -1.000000, -0.000001, -0.000000,
        -1.000000, -0.000001, -0.000000,
        -1.000000, -0.000001, 0.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.707106, 0.000001, -0.707108,
        0.707106, 0.000001, -0.707108,
        0.707106, 0.000000, -0.707108,
        0.707106, 0.000000, -0.707108,
        0.707107, 0.000000, 0.707106,
        0.707107, 0.000000, 0.707106,
        0.707107, 0.000001, 0.707106,
        0.707107, 0.000001, 0.707106,
        -0.707107, -0.000001, 0.707106,
        -0.707107, -0.000001, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707106, -0.000000, -0.707108,
        -0.707106, -0.000000, -0.707108,
        -0.707106, -0.000001, -0.707108,
        -0.707106, -0.000001, -0.707108,
        1.000000, 0.000001, -0.000000,
        1.000000, 0.000001, -0.000000,
        1.000000, 0.000001, -0.000000,
        1.000000, 0.000001, 0.000000,
        -0.000000, 1.000000, 0.000000,
        0.000000, 1.000000, 0.000002,
        -0.000000, 1.000000, 0.000002,
        -0.000000, 1.000000, 0.000000,
        0.000000, 1.000000, -0.000000,
        0.000000, 1.000000, -0.000000,
        0.000000, 1.000000, -0.000000,
        0.000000, 1.000000, -0.000000,
        0.000000, 1.000000, 0.000000,
        0.000000, 1.000000, 0.000000,
        0.000000, 1.000000, 0.000000,
        0.000000, 1.000000, 0.000000,
        -0.000000, 1.000000, -0.000000,
        -0.000000, 1.000000, -0.000000,
        -0.000000, 1.000000, -0.000000,
        -0.000000, 1.000000, -0.000000,
        -0.000000, 1.000000, -0.000002,
        0.000000, 1.000000, 0.000000,
        -0.000000, 1.000000, -0.000000,
        -0.000000, 1.000000, -0.000002,
        -0.000000, 1.000000, -0.000000,
        -0.000002, 1.000000, -0.000001,
        -0.000002, 1.000000, -0.000001,
        0.000000, 1.000000, 0.000000,
        -0.000000, 1.000000, -0.000001,
        0.000000, 1.000000, -0.000001,
        0.000000, 1.000000, -0.000001,
        -0.000000, 1.000000, -0.000001,
        -0.000001, 1.000000, 0.000001,
        -0.000000, 1.000000, -0.000000,
        -0.000000, 1.000000, -0.000000,
        -0.000001, 1.000000, 0.000001,
        -1.000000, -0.000001, 0.000000,
        -1.000000, -0.000001, 0.000000,
        -1.000000, -0.000001, 0.000000,
        -1.000000, -0.000001, 0.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        1.000000, 0.000001, -0.000000,
        1.000000, 0.000001, 0.000000,
        1.000000, 0.000001, -0.000000,
        1.000000, 0.000001, -0.000000,
        0.000003, 0.000000, 1.000000,
        0.000003, 0.000000, 1.000000,
        0.000003, 0.000000, 1.000000,
        0.000003, 0.000000, 1.000000,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, -0.707106,
        -0.707107, -0.000000, -0.707106,
        -0.707107, -0.000000, -0.707106,
        -0.707107, -0.000000, -0.707106,
        0.707107, 0.000000, -0.707106,
        0.707107, 0.000000, -0.707106,
        0.707107, 0.000000, -0.707106,
        0.707107, 0.000000, -0.707106,
        0.707106, 0.000000, 0.707107,
        0.707106, 0.000000, 0.707107,
        0.707106, 0.000000, 0.707107,
        0.707106, 0.000000, 0.707107,
        -0.000000, 1.000000, -0.000000,
        0.000000, 1.000000, 0.000001,
        -0.000000, 1.000000, -0.000000,
        0.000000, 1.000000, -0.000001,
        -0.000000, 1.000000, -0.000000,
        0.000000, 1.000000, -0.000001,
        -0.000000, 1.000000, -0.000000,
        -0.000001, 1.000000, 0.000000,
        0.000000, 0.000000, 1.000000,
        0.000000, 0.000000, 1.000000,
        0.000000, 0.000000, 1.000000,
        0.000000, 0.000000, 1.000000,
        -1.000000, -0.000001, 0.000000,
        -1.000000, -0.000001, 0.000000,
        -1.000000, -0.000001, 0.000000,
        -1.000000, -0.000001, 0.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.000000, 0.000000, -1.000000,
        0.707106, 0.000001, -0.707108,
        0.707106, 0.000000, -0.707108,
        0.707106, 0.000000, -0.707108,
        0.707106, 0.000001, -0.707108,
        0.707107, 0.000000, 0.707106,
        0.707107, 0.000001, 0.707106,
        0.707107, 0.000001, 0.707106,
        0.707107, 0.000000, 0.707106,
        -0.707107, -0.000001, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000000, 0.707106,
        -0.707107, -0.000001, 0.707106,
        -0.707106, -0.000000, -0.707108,
        -0.707106, -0.000001, -0.707108,
        -0.707106, -0.000001, -0.707108,
        -0.707106, -0.000000, -0.707108

    ];


    // create buffer to store texture coordinate (2D coordinates for mapping images to the surface)
    let vertex_texcoord_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_texcoord_buffer);
    // create array of 2D texture coordinate values (each set of 2 values specifies texture coordinate: u, v)
    let texcoords = [];



    // store array of vertex texture coordinates in the vertex_texcoord_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    // enable texcoord_attrib in our GPU program
    gl.enableVertexAttribArray(texcoord_attrib);
    // attach vertex_texcoord_buffer to the texcoord_attrib
    // (as 2-component floating point values)
    gl.vertexAttribPointer(texcoord_attrib, 2, gl.FLOAT, false, 0, 0);

    // store array of vertex normals in the vertex_normal_buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // enable normal_attrib in our GPU program
    gl.enableVertexAttribArray(normal_attrib);
    // attach vertex_normal_buffer to the normal_attrib
    // (as 3-component floating point values)
    gl.vertexAttribPointer(normal_attrib, 3, gl.FLOAT, false, 0, 0);

    // create buffer to store faces of the triangle
    let vertex_index_buffer = gl.createBuffer();
    // set newly created buffer as the active one we are modifying
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertex_index_buffer);
    // create array of vertex indices (each set of 3 represents a triangle)

    let indices = [
        0, 1, 2,
        0, 2, 3,
        4, 5, 6,
        4, 6, 7,
        8, 9, 10,
        8, 10, 11,
        12, 13, 14,
        12, 14, 15,
        16, 17, 18,
        16, 18, 19,
        20, 21, 22,
        20, 22, 23,
        24, 25, 26,
        24, 26, 27,
        28, 29, 30,
        28, 30, 31,
        32, 33, 34,
        32, 34, 35,
        36, 37, 38,
        36, 38, 39,
        40, 41, 42,
        40, 42, 43,
        44, 45, 46,
        44, 46, 47,
        48, 49, 50,
        48, 50, 51,
        52, 53, 54,
        52, 54, 55,
        56, 57, 58,
        56, 58, 59,
        60, 61, 62,
        60, 62, 63,
        64, 65, 66,
        64, 66, 67,
        68, 69, 70,
        68, 70, 71,
        72, 73, 74,
        72, 74, 75,
        76, 77, 78,
        76, 78, 79,
        80, 81, 82,
        80, 82, 83,
        84, 85, 86,
        84, 86, 87,
        88, 89, 90,
        88, 90, 91,
        92, 93, 94,
        92, 94, 95,
        96, 97, 98,
        96, 98, 99,
        100, 101, 102,
        100, 102, 103,
        104, 105, 106,
        104, 106, 107,
        108, 109, 110,
        108, 110, 111,
        112, 113, 114,
        112, 114, 115,
        116, 117, 118,
        116, 118, 119,
        120, 121, 122,
        120, 122, 123,
        124, 125, 126,
        124, 126, 127,
        128, 129, 130,
        128, 130, 131,
        132, 133, 134,
        132, 134, 135,
        136, 137, 138,
        136, 138, 139,
        140, 141, 142,
        136, 139, 143,
        143, 140, 142,
        136, 143, 142,
        144, 145, 146,
        144, 146, 147,
        148, 149, 150,
        148, 150, 151,
        152, 153, 154,
        152, 154, 155,
        156, 157, 158,
        156, 158, 159,
        160, 161, 162,
        160, 162, 163,
        164, 165, 166,
        164, 166, 167,
        168, 169, 170,
        168, 170, 171,
        172, 173, 174,
        172, 174, 175,
        176, 177, 178,
        176, 178, 179,
        180, 181, 182,
        180, 182, 183,
        184, 185, 186,
        184, 186, 187,
        188, 184, 187,
        188, 187, 189,
        190, 191, 192,
        190, 192, 193,
        194, 195, 196,
        194, 196, 197,
        198, 199, 200,
        198, 200, 201,
        202, 203, 204,
        205, 206, 207,
        208, 209, 210,
        211, 212, 213,
        214, 215, 216,
        217, 218, 219,
        217, 219, 220,
        221, 222, 223,
        221, 223, 224,
        225, 226, 227,
        225, 227, 228,
        229, 230, 231,
        232, 233, 234,
        232, 234, 235,
        236, 229, 231,
        232, 235, 236,
        231, 232, 236,
        237, 238, 239,
        237, 239, 240,
        241, 242, 243,
        241, 243, 244,
        245, 246, 247,
        245, 247, 248,
        249, 250, 251,
        249, 251, 252,
        253, 254, 255,
        253, 255, 256,
        257, 258, 259,
        257, 259, 260,
        261, 262, 263,
        261, 263, 264,
        265, 266, 267,
        265, 267, 268,
        269, 270, 271,
        269, 271, 272,
        273, 274, 275,
        273, 275, 276,
        277, 278, 279,
        277, 279, 280,
        281, 282, 283,
        281, 283, 284,
        285, 286, 287,
        285, 287, 288,
        289, 290, 291,
        289, 291, 292,
        293, 294, 295,
        293, 295, 296,
        297, 298, 299,
        297, 299, 300,
        301, 302, 303,
        301, 303, 304,
        305, 306, 307,
        305, 307, 308,
        309, 310, 311,
        309, 311, 312,
        313, 314, 315,
        313, 315, 316,
        317, 318, 319,
        317, 319, 320,
        321, 322, 323,
        321, 323, 324,
        325, 326, 327,
        325, 327, 328,
        329, 330, 331,
        329, 331, 332,
        333, 334, 335,
        333, 335, 336,
        337, 338, 339,
        337, 339, 340,
        341, 342, 343,
        341, 343, 344,
        345, 346, 347,
        345, 347, 348,
        349, 350, 351,
        349, 351, 352,
        353, 354, 355,
        353, 355, 356,
        357, 358, 359,
        357, 359, 360,
        361, 362, 363,
        361, 363, 364,
        365, 366, 367,
        365, 367, 368,
        369, 370, 371,
        369, 371, 372,
        373, 374, 375,
        373, 375, 376,
        377, 378, 379,
        377, 379, 380,
        381, 382, 383,
        381, 383, 384,
        385, 386, 387,
        385, 387, 388,
        389, 390, 391,
        389, 391, 392,
        393, 394, 395,
        393, 395, 396,
        397, 398, 399,
        397, 399, 400,
        401, 402, 403,
        401, 403, 404,
        405, 406, 407,
        405, 407, 408,
        409, 410, 411,
        409, 411, 412,
        413, 414, 415,
        413, 415, 416,
        417, 418, 419,
        417, 419, 420,
        421, 422, 423,
        421, 423, 424,
        425, 426, 427,
        421, 424, 428,
        428, 425, 427,
        427, 421, 428,
        429, 430, 431,
        429, 431, 432,
        433, 434, 435,
        433, 435, 436,
        437, 438, 439,
        437, 439, 440,
        441, 442, 443,
        441, 443, 444,
        445, 446, 447,
        445, 447, 448,
        449, 450, 451,
        449, 451, 452,
        453, 454, 455,
        453, 455, 456,
        457, 458, 459,
        457, 459, 460,
        461, 462, 463,
        461, 463, 464,
        465, 466, 467,
        465, 467, 468,
        469, 470, 186,
        469, 186, 185,
        471, 472, 473,
        471, 473, 474,
        475, 476, 477,
        475, 477, 478,
        479, 480, 481,
        479, 481, 482,
        483, 484, 485,
        483, 485, 486,
        487, 488, 489,
        490, 491, 492,
        493, 494, 495,
        496, 497, 498,
        499, 500, 501,
        502, 503, 504,
        502, 504, 505,
        506, 507, 508,
        506, 508, 509,
        510, 511, 512,
        510, 512, 513,
        514, 515, 516,
        514, 516, 517,
        518, 519, 520,
        514, 517, 521,
        521, 518, 520,
        521, 520, 514,
        522, 523, 524,
        522, 524, 525,
        526, 527, 528,
        526, 528, 529,
        530, 531, 532,
        530, 532, 533,
        534, 535, 536,
        534, 536, 537,
        538, 539, 540,
        538, 540, 541,
        542, 543, 544,
        542, 544, 545,
        546, 547, 548,
        546, 548, 549,
        550, 551, 552,
        550, 552, 553,
        554, 555, 556,
        554, 556, 557,
        558, 559, 560,
        558, 560, 561,
        562, 563, 564,
        562, 564, 565,
        566, 567, 568,
        566, 568, 569,
        570, 571, 572,
        570, 572, 573,
        574, 575, 576,
        570, 573, 577,
        577, 574, 576,
        570, 577, 576,
        578, 579, 580,
        578, 580, 581,
        582, 583, 584,
        582, 584, 585,
        586, 587, 588,
        586, 588, 589,
        590, 591, 592,
        593, 594, 595,
        593, 595, 596,
        597, 590, 592,
        593, 596, 597,
        592, 593, 597,
        598, 599, 600,
        598, 600, 601,
        602, 603, 604,
        602, 604, 605,
        606, 607, 608,
        606, 608, 609,
        610, 611, 612,
        610, 612, 613,
        614, 615, 616,
        614, 616, 617,
        618, 619, 620,
        618, 620, 621,
        622, 623, 624,
        622, 624, 625,
        626, 627, 628,
        626, 628, 629,
        630, 631, 632,
        630, 632, 633,
        634, 635, 636,
        634, 636, 637,
        638, 639, 640,
        638, 640, 641,
        642, 643, 644,
        642, 644, 645,
        646, 647, 648,
        646, 648, 649,
        650, 651, 652,
        646, 649, 653,
        653, 650, 652,
        652, 646, 653,
        654, 655, 656,
        654, 656, 657,
        658, 659, 660,
        658, 660, 661,
        662, 663, 664,
        662, 664, 665,
        666, 667, 668,
        666, 668, 669,
        670, 671, 672,
        666, 669, 673,
        673, 670, 672,
        673, 672, 666,
        674, 675, 676,
        674, 676, 677,
        678, 679, 680,
        678, 680, 681,
        682, 683, 684,
        682, 684, 685,
        686, 687, 688,
        686, 688, 689,
        690, 691, 692,
        690, 692, 693,
        694, 695, 696,
        694, 696, 697,
        698, 699, 700,
        698, 700, 701,
        702, 703, 704,
        702, 704, 705,
        706, 707, 708,
        706, 708, 709,
        710, 711, 712,
        710, 712, 713,
        714, 715, 716,
        714, 716, 717,
        718, 719, 720,
        718, 720, 721,
        722, 723, 724,
        725, 726, 727,
        728, 729, 730,
        731, 732, 733,
        734, 735, 736,
        737, 738, 739,
        726, 740, 741,
        742, 743, 744,
        745, 731, 746,
        747, 748, 749,
        750, 751, 752,
        750, 752, 753,
        754, 755, 756,
        754, 756, 757,
        758, 759, 760,
        758, 760, 761,
        762, 763, 764,
        762, 764, 765,
        766, 767, 768,
        766, 768, 769,
        770, 771, 772,
        770, 772, 773,
        774, 775, 776,
        774, 776, 777,
        778, 779, 780,
        778, 780, 781,
        782, 783, 784,
        782, 784, 785,
        786, 787, 788,
        786, 788, 789,
        790, 791, 792,
        790, 792, 793,
        794, 795, 796,
        794, 796, 797,
        798, 799, 800,
        798, 800, 801,
        802, 803, 804,
        802, 804, 805,
        806, 807, 808,
        806, 808, 809,
        810, 811, 812,
        810, 812, 813,
        814, 815, 816,
        814, 816, 817,
        818, 819, 820,
        820, 821, 822,
        822, 823, 824,
        824, 825, 818,
        818, 820, 822,
        822, 824, 818,
        826, 827, 828,
        826, 828, 829,
        830, 831, 832,
        830, 832, 833,
        834, 835, 836,
        834, 836, 837,
        838, 839, 840,
        838, 840, 841,
        842, 843, 844,
        842, 844, 845,
        846, 847, 848,
        846, 848, 849,
        850, 851, 852,
        850, 852, 853,
        854, 855, 856,
        854, 856, 857,
        858, 859, 860,
        858, 860, 861,
        862, 863, 864,
        862, 864, 865,
        866, 867, 868,
        866, 868, 869,
        870, 871, 872,
        870, 872, 873,
        874, 875, 876,
        874, 876, 877,
        878, 879, 880,
        878, 880, 881,
        882, 883, 884,
        882, 884, 885,
        886, 887, 888,
        886, 888, 889,
        890, 891, 892,
        890, 892, 893,
        894, 895, 896,
        894, 896, 897,
        898, 899, 900,
        898, 900, 901,
        902, 903, 904,
        902, 904, 905,
        906, 907, 908,
        906, 908, 909,
        910, 911, 912,
        910, 912, 913,
        914, 915, 916,
        914, 916, 917,
        918, 919, 920,
        918, 920, 921,
        922, 923, 924,
        924, 925, 926,
        926, 927, 928,
        928, 929, 922,
        922, 924, 926,
        926, 928, 922,
        930, 931, 932,
        930, 932, 933,
        934, 935, 936,
        934, 936, 937,
        938, 939, 940,
        938, 940, 941,
        942, 943, 944,
        942, 944, 945,
        946, 947, 948,
        946, 948, 949,
        950, 951, 952,
        950, 952, 953,
        954, 955, 956,
        954, 956, 957

    ];

    // store array of vertex indices in the vertex_index_buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // no longer modifying our Vertex Array Object, so deselect
    gl.bindVertexArray(null);

    // store the number of vertices used for entire model (number of faces * 3)
    vertex_array.face_index_count = indices.length;

    // return created Vertex Array Object
    return vertex_array;
}
