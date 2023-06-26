<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Siret Eller | Portfolio - Home</title>
        <link rel="icon" href="./resources/images/singlelilac.png">
        <link rel="stylesheet" href="./resources/css/styles.css">
        <link rel="stylesheet" href="./resources/css/darkmode.css" id="modesheet">
        <script src="./resources/js/main.js" defer></script>
        <script src="./resources/js/modeswitch.js" defer></script>
        <script src="./resources/js/nav-drawer.js" defer></script>
        <script src="https://kit.fontawesome.com/28e55809cd.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=WindSong:wght@400;500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400&display=swap" rel="stylesheet">
    </head>

    <body>
        <div class="banner-bg">
            <div class="banner">

                <img src="./resources/images/leaf1.png" alt="" id="banner-leaf-1">
                <img src="./resources/images/leaf2.png" alt="" id="banner-leaf-2">
                <img src="./resources/images/leaf3.png" alt="" id="banner-leaf-3">
                <img src="./resources/images/leaf4.png" alt="" id="banner-leaf-4">
                <img src="./resources/images/leaf5.png" alt="" id="banner-leaf-5">

                <div class="banner-blurry-strip"></div>

                <h1>Siret Eller</h1>
                <span class="personal-title">Aspiring Front-end Developer and Artist</span>

            </div>
        </div>

        <nav>
            <div id="small-nav-arrow-box-open">
                <i class="fas fa-chevron-right" id="small-nav-arrow-open"></i>
            </div>

            <div id="small-nav">
                <div id="small-nav-arrow-box-close">
                    <i class="fas fa-chevron-right" id="small-nav-arrow-close"></i>
                </div>

                <div id="small-nav-links">
                    <span class="small-nav-title">Navigate to other tabs</span>
                    <a href="./projects.html"><i class="fas fa-file"></i>Web Projects</a>
                    <a href="./art.html"><i class="fas fa-palette"></i>Art Showcase</a>
                    <div class="small-nav-game-div">
                        <a href="./game.html"><i class="fas fa-gamepad"></i>Game</a> <span class="game-asterisk-text"><span class="game-asterisk">*</span>Large screens only</span>
                    </div>

                    <span class="small-nav-title">Scroll down to content on this page</span>
                    <a href="#about-me">About Me</a>
                    <a href="#best-works">Best Works</a>
                    <a href="#contact">Contact Me</a>

                    <span class="small-nav-title">Follow my progress on</span>
                    <a href="https://github.com/evergreenlilac"><i class="fab fa-github"></i>Github <sup><i class="fas fa-external-link-alt"></i></sup> </a>
                </div>
            </div>
        </nav>

        <div class="light-switch-shadow">
            <div class="light-switch-container">
                <div class="light-switch"><i id="sun" class="fas fa-sun"></i><i id="moon" class="fas fa-moon"></i></div>    
            </div>
        </div>

        <div class="section-container">
            <div class="anchor" id="about-me"></div>
            <section class="about-me">
                <div class="pictures">
                    <figure class="drawing" id="drawing">
                        <img src="./resources/images/it-me.png" alt="A digital drawing of me"/>
                        <figcaption>That's a neat drawing, but...</figcaption>
                    </figure>

                    <figure class="photo" id="photo">
                        <img src="./resources/images/itmefullbody.jpg" alt="A photo of me"/>
                        <figcaption>Like the other version better?</figcaption>
                    </figure>

                    <figure class="drawing" id="drawing-small">
                        <img src="./resources/images/drawing-portrait.png" alt="A digital drawing of me"/>
                    </figure>

                    <figure class="photo" id="photo-small">
                        <img src="./resources/images/itmeportrait.jpg" alt="A photo of me"/>
                    </figure>
                </div>

                <div class="filler"></div>
                <h2>About Me</h2>
                <div class="background-pattern"></div>
                <div class="blurb">
                    <p>Hey there, I'm so glad you made it to my page! Welcome!<br><br>

                        I'm Siret, an aspiring front end developer/artist based in Tartu, Estonia. <br><br>

                        Currently I'm independetly learning front end development online. 
                        The creative aspect was the main reason why I was drawn to it at first, but now I'm also really enjoying learning about how the web works. <br><br>

                        As for my artist side, I consider digital art creation to just be a hobby right now, but 
                        I am open to discussing commission work if something in my gallery should happen to catch your eye.<br><br>

                        While I know that there are many fantastic frameworks and libraries out there,
                        I decided to challenge myself by only using vanilla HTML, CSS and JS to build this page.
                        I really hope that you like what you see.<br><br>

                        Critique me so that I can improve myself!
                    </p>
                </div>

                <div class="button-container"><button class="drawing-switch" id="drawing-switch">What are you really like?</button></div>
                <div class="button-container"><button class="photo-switch" id="photo-switch">Switch back to cartoon</button></div>

                <div class="button-container"><button class="drawing-switch" id="drawing-switch-small">Photo-fy</button></div>
                <div class="button-container"><button class="photo-switch" id="photo-switch-small">Cartoonify</button></div>
            </section>

            <div id="zoom-box">
                    <div class="zoomed-img-container">
                        <img src="#" alt="" id="zoomed-img"/>
                    </div>
                    <span id="close">X</span>
            </div>
            
            <div class="anchor" id="best-works"></div>
            <section class="best-works">

                <div class="background-pattern"></div>

                <div class="heading">
                    <h3>Have a look at some of my</h3>
                    <h2>Best Works</h2>
                </div>

                <h4 class="webpages">Web projects</h4>
                <div class="web-gallery gallery">
                    <div class="carousel">
                        <div class="left-arrow-container">
                            <i class="fas fa-chevron-left" id="arrow-left-web"></i>
                        </div>

                        <div class="find-miko-preview">
                            <img src="./resources/images/game/find-miko/mikoforintro.png" alt=""/>
                            <div class="preview-text-box">
                                <a href="./find-miko.html" class="preview-title">Miko's Big Day Out</a>
                                <span class="preview-intro">A small web game built with vanilla JS, HTML and CSS</span>
                            </div>
                        </div>
                        

                        <div class="right-arrow-container">
                            <i class="fas fa-chevron-right" id="arrow-right-web"></i>
                        </div>
                    </div>
                </div>
                <div class="web-see-more see-more">
                    <a href="./projects.html" target="_blank">See more</a>
                </div>
            

                <h4 class="artwork">Artwork</h4>
                <div class="art-gallery gallery">
                    <div class="carousel">
                        <div class="left-arrow-container" id="arrow-left-art">
                            <i class="fas fa-chevron-left"></i>
                        </div>
                        <div class="shade"></div>
                        <div class="images-container">
                            <div id="art-1-container" class="single-container">
                                <img src="./resources/images/aileen1.png" alt="A drawing of a woman with wings" id="art-1"/>
                            </div>
                            <div id="art-2-container" class="single-container">
                                <img src="./resources/images/intto1.png" alt="A drawing of a merman" id="art-2"/>
                            </div>
                            <div id="art-3-container" class="single-container">
                                <img src="./resources/images/miko.png" alt="A simplistic poster of a Shiba Inu" id="art-3"/>
                            </div>
                        </div>

                        <div class="right-arrow-container" id="arrow-right-art">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div class="art-see-more see-more">
                    <a href="./art.html" target="_blank">See more</a>
                </div>
            
            </section>

            <div class="anchor" id="contact"></div>
            <section class="contact">
                <h2>Contact Me</h2>
                <div class="info">
                    <p class="contact-info-large">Saw something you liked? <br><br>

                    Fill out this handy-dandy form and I'll get back to you as soon as I can or contact me directly via<br><br>

                    <i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/siret-eller-46108a224/">LinkedIn</a> <sup><i class="fas fa-external-link-alt"></i></sup> <br><br>
                    or<br><br>
                    <i class="fas fa-envelope"></i><span class="mail">sireteller@gmail.com</span>
                    </p>

                    <p class="contact-info-small">Saw something you liked? <br><br>

                    Fill out this handy-dandy form and I'll get back to you as soon as I can or contact me directly via<br><br>

                    <i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/siret-eller-46108a224/">LinkedIn</a> <sup><i class="fas fa-external-link-alt"></i></sup>  or  
                    <i class="fas fa-envelope"></i><span class="mail">sireteller@gmail.com</span></p>
                </div>

                <form class="form" action="./index.php" method="POST">
                    <div class="email-label-cont">
                        <label for="email" class="email">Your email</label>
                    </div>
                    <input type="email" id="email" name="email" class="email" required><br>

                    <div class="msg-label-cont">
                        <label for="message" class="message">Your message</label>
                    </div>
                    <textarea id="message" name="message" class="message" required></textarea>

                    <div class="submit-container">
                        <button class="submit">Submit</button>
                    </div>
                </form>

                <?php
                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    
                    $conn = mysqli_connect("localhost", [username], [password], [db]);
                    
                    // Check connection
                    if($conn === false){
                        die("ERROR: Could not connect. " 
                            . mysqli_connect_error());
                    }
                    
                    // Taking all values from the form data(input)
                    $email =  $_REQUEST['email'];
                    $message = $_REQUEST['message'];

                    // Performing insert query execution
                    $sql = "INSERT INTO contact (email, message) VALUES ('$email', '$message')";

                    if(mysqli_query($conn, $sql)){
                        echo '<script>alert("Form submitted successfully!")</script>';
                    } else{
                        echo '<script>alert("Form submission failed")</script>';
                    }
                    
                    
                    // Close connection
                    mysqli_close($conn);
                }
                ?>

            </section>
        </div>

        <footer>
            <span class="copr">&copy; 2022 Siret Eller</span>
        </footer>
    </body>
</html>