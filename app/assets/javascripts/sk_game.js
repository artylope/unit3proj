
/////////////////////////////////////////////////////////////
// ╔═╗╦ ╦╦═╗╔╗╔╦╔╦╗╦ ╦╦═╗╔═╗  ╔═╗╦  ╔═╗╔╗╔╔╗╔╔═╗╦═╗   ╦╔═╗ //
// ╠╣ ║ ║╠╦╝║║║║ ║ ║ ║╠╦╝║╣   ╠═╝║  ╠═╣║║║║║║║╣ ╠╦╝   ║╚═╗ //
// ╚  ╚═╝╩╚═╝╚╝╩ ╩ ╚═╝╩╚═╚═╝  ╩  ╩═╝╩ ╩╝╚╝╝╚╝╚═╝╩╚═  ╚╝╚═╝ //
/////////////////////////////////////////////////////////////

Paloma.controller('Wishlists', {
            floorplan: function() {
                let furnitureArr = [];
                let coordinatesArr = [];
                let lengthRatio = 50;
                let calibrateStep = 0;
                var calibrateState = false;

                function readURL(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#floor_plan_image')
                                .attr('src', e.target.result)
                        };
                        reader.readAsDataURL(input.files[0]);
                    }
                    document.querySelector('.file-name').innerText=input.files[0].name;
                    setTimeout(loadFloorPlanDiv, 500);
                }

                function loadFloorPlanDiv() {
                    var floorPlanImg = document.getElementById("floor_plan_image");
                    var floorPlanContainer = document.querySelector(".floor_plan_container");
                    var imgWidth = floorPlanImg.naturalWidth;
                    var imgHeight = floorPlanImg.naturalHeight;
                    floorPlanImg.style.width = imgWidth + "px";
                    console.log("file loaded!");
                    floorPlanContainer.style.width = imgWidth + "px";
                    floorPlanContainer.style.height = imgHeight + "px";
                }

                function getImageWidth() {
                    return parseInt(document.getElementById("floor_plan_image").style.width);
                }

                function clearAllFurniture() {
                    document.querySelectorAll('.snap-grid').forEach((elem) => {
                        elem.parentNode.removeChild(elem);
                    })
                    document.querySelectorAll('.markers').forEach((elem) => {
                        elem.parentNode.removeChild(elem);
                    })
                    resetCalibrateMenu();
                    document.getElementById('floating_menu').style.display = "none";
                    document.getElementById('calibrate_menu').style.display = "none";
                }

                function resetCalibrateMenu() {
                    document.getElementById("calibrate_menu").children[1].style.textDecoration = "none";
                    document.getElementById("calibrate_menu").children[2].style.textDecoration = "none";
                    document.getElementById('lengthParam').value="";
                    calibrateState = false;
                    calibrateStep = 0;
                    coordinatesArr = [];
                }

                function placeDiv(x_pos, y_pos) {
                    var d = document.createElement('div');
                    d.setAttribute("id", "marker-" + x_pos + "-" + y_pos)
                    d.setAttribute("class", "markers");
                    d.style.position = "absolute";
                    d.style.left = x_pos - 6 + 'px';
                    d.style.top = y_pos - 6 + 'px';
                    document.body.appendChild(d);
                    console.log("append div");
                }

                function putMarker(event) {
                    coordinatesArr.push([event.pageX, event.pageY]);
                    console.log(event.pageX + ' - ' + event.pageY);
                    placeDiv(event.pageX, event.pageY);
                    console.dir(coordinatesArr);
                }

                function calibratePlan(step, event) {
                    switch (step) {
                        case 0:
                            //display div
                            document.getElementById('calibrate_menu').style.display = "block";
                            break;
                        case 1:
                            putMarker(event);
                            document.getElementById("calibrate_menu").children[1].style.textDecoration = "line-through";
                            break;
                        case 2:
                            putMarker(event);
                            document.getElementById("calibrate_menu").children[2].style.textDecoration = "line-through";
                            break
                        case 3:
                            let length = Math.max(Math.abs(coordinatesArr[0][1] - coordinatesArr[1][1]), Math.abs(coordinatesArr[0][0] - coordinatesArr[1][0]));
                            let lengthParam = parseFloat(document.getElementById('lengthParam').value);
                            lengthRatio = length / lengthParam;
                            console.log(lengthRatio);
                            document.getElementById('floating_menu').style.display = "block";
                            break;
                        default:
                            // code block
                    }
                }

                function loadEventListeners() {
                    console.log("loading event listeners");

                    var calibrateSubmit = document.querySelector('#submit_calibrate');
                    calibrateSubmit.addEventListener('click', function(event) {
                        calibratePlan(3, event);
                        document.getElementById('calibrate_menu').style.display = "none";
                    }, false);

                    var importFileButton = document.querySelector('#importFile');
                    importFileButton.addEventListener('change', function(event) {
                        readURL(this);
                    }, false);

                    document.addEventListener('dblclick', function(event) {
                        if (event.target.matches('.floatmenu')) {

                            let furnitureImg = event.target.getAttribute('src');
                            let furnitureName = furnitureImg.substring(0, furnitureImg.lastIndexOf('.'));

                            // Create a new element
                            let newNode = document.createElement('div');
                            furnitureArr.push(furnitureName);
                            newNode.setAttribute("class", "sofa grid-snap");
                            let idName = furnitureArr.length + "-" + furnitureName;
                            newNode.setAttribute("id", idName);
                            // Get the reference node
                            let referenceNode = document.querySelector('#furnitureDiv');
                            // Insert the new node before the reference node
                            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

                            let gridWidth = lengthRatio;
                            // console.log("inside show sofa, gridWidth= " + gridWidth);

                            let x = document.createElement("IMG");
                            x_width = parseInt(event.target.dataset.width) / 1000 * gridWidth;
                            x_height = parseInt(event.target.dataset.length) / 1000 * gridWidth;
                            console.log(x_width + " x " + x_height)
                            x.setAttribute("src", furnitureImg);
                            x.setAttribute("id", "img" + idName);
                            x.setAttribute("class", "furnitureIcon");
                            x.setAttribute("width", x_width + "px");
                            x.setAttribute("height", x_height + "px");
                            x.style.transform = "rotate(0deg)";
                            let element = document.getElementById(idName);
                            element.appendChild(x);
                            element.style.width = x_width + "px";
                            element.style.height = x_height + "px";
                            getImageWidth()
                            element.style.left = getImageWidth()/2 - x_width/2 + "px";
                            element.style.top = getImageWidth()/2 - x_height/2 + "px";
                            snapGrid(element);
                            doubleTap(element);
                        }
                    });

                    document.addEventListener('click', function(event) {
                        // console.log("loc:"+event.pageX + ' - ' + event.pageY);

                        if (event.target.matches('#clearAllFurnitureButton')) {
                            clearAllFurniture();
                        }

                        if (event.target.matches('#calibrate')) {
                            calibrateState = !calibrateState;
                            console.log('calibrate calls : ' + calibrateState);
                            if (calibrateState) {
                                calibratePlan(calibrateStep, event);
                                calibrateStep++;
                            } else {
                                calibrateStep = 0;
                            }
                        }

                        if (event.target.matches('#floor_plan_overlay') && calibrateState) {
                            console.log('logging clicks: ' + coordinatesArr.length);
                            calibratePlan(calibrateStep, event);
                            calibrateStep++;
                        }
                    }, false);
                }

                function rotateFurniture(element) {
                    let angle = parseInt(document.getElementById(element.id).style.transform.replace('rotate(', ''));
                    if (angle >= 360) {
                        angle = 90;
                    } else {
                        angle += 90;
                    }
                    document.getElementById(element.id).style.transform = "rotate(" + angle + "deg)";
                }

                /////////////////////////////////////
                //    Interact.JS : Grid-Snap      //
                /////////////////////////////////////

                function snapGrid(element) {
                    var x = 0;
                    var y = 0
                    interact(element)
                        .draggable({
                            modifiers: [
                                interact.modifiers.snap({
                                    targets: [
                                        interact.createSnapGrid({
                                            x: 5,
                                            y: 5
                                        })
                                    ],
                                    range: Infinity,
                                    relativePoints: [{
                                        x: 0,
                                        y: 0
                                    }]
                                }),
                                interact.modifiers.restrict({
                                    restriction: element.parentNode,
                                    elementRect: {
                                        top: 0,
                                        left: 0,
                                        bottom: 1,
                                        right: 1
                                    },
                                    endOnly: true
                                })
                            ],
                            inertia: true
                        })
                        .on('dragmove', function(event) {
                            x += event.dx
                            y += event.dy

                            event.target.style.webkitTransform =
                                event.target.style.transform =
                                'translate(' + x + 'px, ' + y + 'px)'
                        })
                }

                /////////////////////////////////////
                //    Interact.JS : Double-Tap     //
                /////////////////////////////////////

                function doubleTap(element) {
                    interact(element)
                        .on('doubletap', function(event) {
                            console.log("doubletap evt target" + event.target.className);
                            if (event.target.className === 'furnitureIcon') {
                                rotateFurniture(event.target);
                            }

                        })
                }

                /////////////////////////////////////
                //    Interact.JS : Draggable      //
                /////////////////////////////////////

                interact('.draggable')
                    .draggable({
                        // enable inertial throwing
                        inertia: true,
                        // keep the element within the area of it's parent
                        modifiers: [
                            interact.modifiers.restrictRect({
                                restriction: 'parent',
                                endOnly: true
                            })
                        ],
                        // enable autoScroll
                        autoScroll: true,
                        // call this function on every dragmove event
                        onmove: dragMoveListener,
                        // call this function on every dragend event
                        onend: function(event) {
                        }
                    })

                function dragMoveListener(event) {
                    var target = event.target
                    // keep the dragged position in the data-x/data-y attributes
                    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
                    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

                    // translate the element
                    target.style.webkitTransform =
                        target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)'

                    // update the posiion attributes
                    target.setAttribute('data-x', x)
                    target.setAttribute('data-y', y)
                }

                // window.dragMoveListener = dragMoveListener

                ////////////////////////////////
                //    Drag a div element      //
                ////////////////////////////////

                dragElement(document.getElementById("floor_plan_overlay"));

                function dragElement(elmnt) {
                    var pos1 = 0,
                        pos2 = 0,
                        pos3 = 0,
                        pos4 = 0;
                    if (document.getElementById(elmnt.id + "header")) {
                        // if present, the header is where you move the DIV from:
                        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
                    } else {
                        // otherwise, move the DIV from anywhere inside the DIV:
                        elmnt.onmousedown = dragMouseDown;
                    }

                    function dragMouseDown(e) {
                        e = e || window.event;
                        e.preventDefault();
                        // get the mouse cursor position at startup:
                        pos3 = e.clientX;
                        pos4 = e.clientY;
                        document.onmouseup = closeDragElement;
                        // call a function whenever the cursor moves:
                        document.onmousemove = elementDrag;
                    }

                    function elementDrag(e) {
                        e = e || window.event;
                        e.preventDefault();
                        // calculate the new cursor position:
                        pos1 = pos3 - e.clientX;
                        pos2 = pos4 - e.clientY;
                        pos3 = e.clientX;
                        pos4 = e.clientY;
                        // set the element's new position:
                        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                    }

                    function closeDragElement() {
                        // stop moving when mouse button is released:
                        document.onmouseup = null;
                        document.onmousemove = null;
                    }
                }

                // LOAD EVENT LISTENERS
                loadEventListeners();

            }
        });
