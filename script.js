<!DOCTYPE html>
<!-- This site was created in Webflow. https://www.webflow.com --><!-- Last Published: Mon Jul 31 2023 08:48:04 GMT+0000 (Coordinated Universal Time) -->
<html data-wf-domain="oakshade-ai.webflow.io" data-wf-page="64c15bd8a90fafad1f6c9f2c"
    data-wf-site="64c15bd7a90fafad1f6c9ee5" lang="en">

<head>
    <meta charset="utf-8" />
    <title>OakShade AI</title>
    <!-- <meta content="Solana Rebuild on Webflow by Dhruv Sachdev" name="description" />
    <meta content="https://solana.com/sharing-card.png" property="og:image" />
    <meta content="https://solana.com/sharing-card.png" property="twitter:image" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="Webflow" name="generator" /> -->
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous" />
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
    <script
        type="text/javascript">WebFont.load({ google: { families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"] } });</script>
    <script
        type="text/javascript">!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);</script>
    <link
        href="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c774a62f2a7abaabfc6856_20230727_141739_0000-removebg-preview%20(1).jpg"
        rel="shortcut icon" type="image/x-icon" />
    <link
        href="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c774c7e0afd260addfe394_20230727_141739_0000-removebg-preview%20(2).jpg"
        rel="apple-touch-icon" /><!-- Please keep this css code to improve the font quality-->
    <style>
        * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    </style>
    <!-- Chatbot -->
    <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
    <script src="https://mediafiles.botpress.cloud/d1b2f1ce-8678-4192-b11f-f8b1ac6eb84c/webchat/config.js"
        defer></script>
</head>

<body>
    <div class="loader-line">
        <div class="loader-fill"></div>
    </div>
    <div class="navbar-logo-left-2">
        <div data-animation="default" data-collapse="all" data-duration="400" data-easing="ease" data-easing2="ease"
            role="banner" class="navbar-logo-left-container-2 shadow-three w-nav">
            <div class="container-2">
                <div class="navbar-wrapper-2"><a href="#" class="navbar-brand-2 w-nav-brand"><img
                            src="assets/logo.png"
                            loading="lazy" width="67" alt="" class="image-6" /></a>
                    <div class="div-block-2"><img
                            src="assets/navbar-title.png"
                            loading="lazy" width="193" alt="" class="image-7" /></div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-wrapper">
        <div class="custom-styles w-embed">
            <style>
                html {
                    font-size: calc(0.625rem + 0.41666666666666663vw);
                }

                @media screen and (max-width:1920px) {
                    html {
                        font-size: calc(0.625rem + 0.41666666666666674vw);
                    }
                }

                @media screen and (max-width:1440px) {
                    html {
                        font-size: calc(0.8126951092611863rem + 0.20811654526534862vw);
                    }
                }

                @media screen and (max-width:479px) {
                    html {
                        font-size: calc(0.7494769874476988rem + 0.8368200836820083vw);
                    }
                }


                .hello-block-top {
                    clip-path: polygon(3.125rem 0%, calc(100% - 3.125rem) 0%, 99% 100%, 1% 100%);
                }

                .cta-block-bottom {
                    clip-path: polygon(10% 64%, 90% 64%, 99% 0%, 1% 0%)
                }

                .footer-block-top {
                    clip-path: polygon(25px 0%, calc(100% - 25px) 0%, 100% 100%, 0% 100%)
                }

                ::selection {
                    background: #00ffbd;
                    color: #232323;
                }

                body,
                html {
                    text-rendering: geometricPrecision;
                    -webkit-font-smoothing: antialiased;
                    -webkit-font-smoothing: subpixel-antialiased
                }


                /* Pulsing Outline */
                .pulse {
                    box-shadow: 0 0 0 0 rgba(20, 241, 149, 1);
                    animation: pulsing-outline 2s infinite;
                }

                @keyframes pulsing-outline {
                    0% {
                        box-shadow: 0 0 0 0 rgba(20, 241, 149, 0.7);
                    }

                    70% {
                        box-shadow: 0 0 0 10px rgba(20, 241, 149, 0);
                    }

                    100% {
                        box-shadow: 0 0 0 0 rgba(20, 241, 149, 0);
                    }
                }


                :root {
                    --animate-line-speed: 0.3s;
                    --animate-line-ease: cubic-bezier(0.12, 0, 0.39, 0);
                }

                .footer-link {
                    display: inline-block;
                    position: relative;
                    overflow-x: hidden;
                }

                .footer-link::after {
                    pointer-events: none;
                    background-image: linear-gradient(13deg, #14f195, #9945ff);
                    ;
                    ;
                    content: "";
                    height: 1px;
                    position: absolute;
                    left: auto;
                    top: auto;
                    right: 0%;
                    bottom: 0%;
                    width: 0%;
                    transition: width var(--animate-line-ease) var(--animate-line-speed);
                }

                .footer-link:hover::after {
                    width: 100%;
                    right: auto;
                    left: 0%;
                }
            </style>
        </div>
        <div class="global-styles w-embed">
            <style>
                /* Snippet gets rid of top margin on first element in any rich text*/
                .w-richtext>:first-child {
                    margin-top: 0;
                }

                /* Snippet gets rid of bottom margin on last element in any rich text*/
                .w-richtext>:last-child,
                .w-richtext ol li:last-child,
                .w-richtext ul li:last-child {
                    margin-bottom: 0;
                }

                /* Snippet prevents all click and hover interaction with an element */
                .clickable-off {
                    pointer-events: none;
                }

                /* Snippet enables all click and hover interaction with an element */
                .clickable-on {
                    pointer-events: auto;
                }

                /* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/
                .div-square::after {
                    content: "";
                    display: block;
                    padding-bottom: 100%;
                }

                /*Hide focus outline for main content element*/
                main:focus-visible {
                    outline: -webkit-focus-ring-color auto 0px;
                }

                /* Make sure containers never lose their center alignment*/
                .container-medium,
                .container-small,
                .container-large {
                    margin-right: auto !important;
                    margin-left: auto !important;
                }

                /*Reset buttons, and links styles*/
                a {
                    color: inherit;
                    text-decoration: inherit;
                    font-size: inherit;
                }

                /*Apply "..." after 3 lines of text */
                .text-style-3lines {
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }

                /*Apply "..." after 2 lines of text */
                .text-style-2lines {
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            </style>
        </div>
        <main class="main-wrapper">
            <header class="section-header">
                <div class="page-padding">
                    <div class="container-large">
                        <div class="padding-vertical padding-xhuge">
                            <div class="max-width-medium is-centered-tablet">
                                <div class="w-layout-grid header_component">
                                    <div class="header_content-copy">
                                        <div class="margin-bottom margin-small">
                                            <h1 class="heading-xlarge is-centered-tablet tricks slide-in">Intelligent
                                                <br />solutions for<br />a Dynamic <br />World.
                                            </h1>
                                        </div>
                                        <div class="margin-top margin-small">
                                            <div class="button-row">
                                                <div class="button-wrapper no-top-margin"><a href="#" id="gs"
                                                        class="button pulse w-button">Get started</a></div>
                                                <div class="button-wrapper"><a href="#services_header"
                                                        class="button-secondary is-hero w-button">Our services</a></div>
                                            </div>
                                        </div>
                                        <div class="margin-top margin-medium">
                                            <p class="text-size-medium is-centered-tablet">OakShade is an AI automation
                                                agency empowering businesses with cutting-edge solutions for growth and
                                                efficiency<br /></p>
                                        </div>
                                    </div>
                                    <div data-poster-url="assets/home-bg.jpg"
                                        data-autoplay="true" data-loop="true" data-wf-ignore="true"
                                        id="w-node-_251b2c22-fe60-73cc-9ff4-9742fadf2402-1f6c9f2c"
                                        class="hero-full-video w-background-video w-background-video-atom"><video
                                            id="251b2c22-fe60-73cc-9ff4-9742fadf2402-video" autoplay="" loop=""
                                            style="background-image:url(&quot;assets/home-bg2.jpg&quot;)"
                                            muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
                                            <source
                                                src="assets/home-bg-vid.mp4"
                                                data-wf-ignore="true" />
                                            <source
                                                src="assets/home-bg-vid.mp4"
                                                data-wf-ignore="true" />
                                        </video></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section class="section-layout">
                <div class="page-padding">
                    <div class="container-large">
                        <div class="margin-vertical margin-huge">
                            <div class="w-layout-grid layout_component">
                                <div class="layout_content-left">
                                    <h2 id="Get-started" class="heading-large is-centered-mobile">Join the fastest
                                        growing ecosystem<br /></h2>
                                </div>
                                <div class="layout_content-right">
                                    <p class="text-size-medium is-centered-mobile">AI automation fuels business growth
                                        by streamlining operations, enhancing customer experiences, and enabling
                                        data-driven decision-making for increased efficiency and productivity.<br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section data-w-id="dbe9990a-89bc-c8d1-2e1e-e4474a098f4b" class="section-hello">
                <div class="margin-vertical margin-huge">
                    <div class="margin-top margin-medium">
                        <div class="page-padding">
                            <div class="section-hello-wrapper">
                                <div class="hello-video-wrapper">
                                    <div data-poster-url="assets/about-img.jpg"
                                        data-video-urls="assets/about-bg-vid.mp4"
                                        data-autoplay="true" data-loop="true" data-wf-ignore="true"
                                        data-w-id="7980c477-0a7d-965b-72d0-f44ea9791352" style="opacity:0"
                                        class="hello-video w-background-video w-background-video-atom"><video
                                            id="7980c477-0a7d-965b-72d0-f44ea9791352-video" autoplay="" loop=""
                                            style="background-image:url(&quot;assets/about-img.jpg&quot;)"
                                            muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
                                            <source
                                                src="assets/about-bg-vid.mp4"
                                                data-wf-ignore="true" />
                                            <source
                                                src="assets/about-bg-vid.mp4"
                                                data-wf-ignore="true" />
                                        </video></div>
                                </div>
                                <div class="hello-block-wrapper">
                                    <div class="hello-block-top"></div>
                                    <div class="hello-block-main">
                                        <div class="margin-bottom margin-small">
                                            <h2 class="heading-large">Say hello to our Bot :)<br /></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="section-scale padding-bottom padding-large">
                <div class="margin-vertical margin-huge">
                    <div class="page-padding">
                        <div class="scale-content-wrapper">
                            <div class="container-large">
                                <div class="max-width-large">
                                    <div class="margin-bottom margin-small">
                                        <h2 class="heading-large is-scale-section">Empowering<br /><span
                                                class="heading-medium is-span">growth through<br />AI Automation.</span>
                                        </h2>
                                    </div>
                                    <div class="text-size-medium is-smaller">Experience organic growth, lead generation,
                                        and business expansion through Oakshade&#x27;s transformative AI revolution,
                                        unlocking your full potential for a brighter and prosperous future.</div>
                                </div>
                            </div>
                        </div>
                    </div><img
                        src="assets/about-bg-2.png"
                        loading="lazy"
                        srcset="assets/about-bg-3.png 500w, assets/about-bg-4.png 800w, assets/about-bg-5.png 1080w, assets/about-bg-6.png 1600w, assets/about-bg-7.png 2000w, about-bg-8.png 2600w, assets/about-bg-9.png 3200w, assets/about-bg-10 3840w"
                        sizes="100vw" alt="" class="full-image" />
                </div>
            </div>
            <section class="section-features">
                <div class="margin-vertical margin-huge">
                    <div class="page-padding">
                        <div class="container-large">
                            <div class="features-wrapper">
                                <div data-w-id="24f89a9d-31f4-8bc3-a71b-22b30c0e6b97" class="feature-card">
                                    <div class="card-top">
                                        <div class="margin-bottom margin-small">
                                            <h2 class="heading-large">NutriBot Pro</h2>
                                        </div>
                                        <div class="text-size-medium is-smaller">Assists clients with personalized meal
                                            plans, nutritional advice, and recipe suggestions, boosting client retention
                                            and organic referrals.</div>
                                    </div>
                                    <div class="card-bottom"><img
                                            src="assets/project1.png"
                                            loading="lazy"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, (max-width: 991px) 48vw, 47vw"
                                            srcset="assets/project1-1.png 500w, assets/project1-2.png 800w, assets/project1-3.png 1008w"
                                            alt="" class="full-image" /></div>
                                </div>
                                <div class="features-wrapper">
                                    <div data-w-id="7e051404-29b5-3baa-f27b-cbdb0a052510" class="feature-card">
                                        <div class="card-top">
                                            <div class="margin-bottom margin-small">
                                                <h2 class="heading-large">Baki AI</h2>
                                            </div>
                                            <div class="text-size-medium is-smaller">Engages users with workout
                                                routines, fitness tips, and class schedules, attracting new leads and
                                                fostering loyal gym-goers, driving organic growth.</div>
                                        </div>
                                        <div class="card-bottom"><img
                                                src="assets/project2.png"
                                                loading="lazy"
                                                srcset="assets/project2-1.png 500w, assets/project2-2.png 800w, assets/project2-3.png 1012w"
                                                sizes="(max-width: 479px) 92vw, (max-width: 767px) 93vw, 51vw" alt=""
                                                class="full-image" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="section-decenstralized">
                <div class="margin-vertical margin-huge">
                    <div class="page-padding">
                        <div class="section-content-wrapper">
                            <div class="container-large">
                                <div class="max-width-large">
                                    <div class="margin-bottom margin-small">
                                        <h2 id="services_header" class="heading-large is-scale-section">Our AI <span
                                                class="heading-medium is-span">Driven Services</span></h2>
                                    </div>
                                    <div class="text-size-medium is-smaller">Empowering businesses with innovative AI
                                        solutions that streamline processes, enhance interactions, and elevate overall
                                        performance for sustainable growth and success.<br /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-background"><img
                            src="assets/services-bg.png"
                            loading="lazy" sizes="100vw"
                            srcset="assets/services-bg1.png 500w, assets/services-bg2.png 800w, assets/services-bg3.png 1080w, assets/services-bg4.png 1600w, assets/services-bg5.png 2000w, assets/services-bg6.png 2600w, assets/services-bg7.png 3048w"
                            alt="" /></div>
                </div>
            </div>
            <div class="section-cta">
                <div class="margin-vertical margin-huge">
                    <div class="page-padding">
                        <div class="container-large">
                            <div class="cards-grid">
                                <div id="w-node-_86aa4135-ada9-5fc0-b8bf-358ebcae8327-1f6c9f2c"
                                    data-w-id="86aa4135-ada9-5fc0-b8bf-358ebcae8327" class="cta-card is-pink">
                                    <div class="cta-top">
                                        <div class="margin-bottom margin-small">
                                            <h2 class="heading-medium"><strong class="bold-text-3">Chatbot
                                                    Development</strong></h2>
                                        </div>
                                        <div class="text-size-medium is-smaller">Creating smart, conversational bots
                                            using artificial intelligence for seamless customer interactions and
                                            support.</div>
                                    </div>
                                </div>
                                <div id="w-node-_38fc393b-ff18-0a13-2a95-e2134a5f679d-1f6c9f2c"
                                    data-w-id="38fc393b-ff18-0a13-2a95-e2134a5f679d" class="cta-card-copy is-pink-copy">
                                    <div class="cta-top">
                                        <div class="margin-bottom margin-small">
                                            <h2 class="heading-medium"><strong class="bold-text">AI Enhanced
                                                    <br />CRM</strong></h2>
                                        </div>
                                        <div class="text-size-medium is-smaller">Intelligent customer relationship
                                            management system that uses AI to enhance sales, marketing, and customer
                                            support processes.</div>
                                    </div>
                                </div>
                                <div id="w-node-c551e99e-3fa7-d9b7-2e13-ebe69aa6aa01-1f6c9f2c"
                                    data-w-id="c551e99e-3fa7-d9b7-2e13-ebe69aa6aa01" class="cta-card-copy">
                                    <div class="cta-top">
                                        <div class="margin-bottom margin-small">
                                            <h2 class="heading-medium"><strong class="bold-text-4">AI-Enabled Zapier
                                                    Flows</strong></h2>
                                        </div>
                                        <div class="text-size-medium is-smaller">Automate tasks, integrate applications,
                                            and optimize data using advanced artificial intelligence capabilities.</div>
                                    </div>
                                </div>
                                <div id="w-node-_3beec6f1-0c15-1e64-0f84-1d756056bdea-1f6c9f2c"
                                    data-w-id="3beec6f1-0c15-1e64-0f84-1d756056bdea"
                                    class="cta-card-copy is-green-copy">
                                    <div class="cta-top">
                                        <div class="margin-bottom margin-small">
                                            <h2 class="heading-medium"><strong class="bold-text-2">AI Consultation
                                                    <br />for business</strong></h2>
                                        </div>
                                        <div class="text-size-medium is-smaller">Tailored advice from our experts to
                                            help businesses leverage AI effectively and achieve their strategic
                                            objectives.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><a href="#" class="button-pill w-button">get started</a>
            <div class="div-block-5">
                <div class="align-centre-text">
                    <div class="max-width-large">
                        <div class="margin-bottom-copy margin-small-copy">
                            <h2 id="Team" class="heading-large-copy is-scale-section">Meet <span
                                    class="heading-medium is-span">Our Team</span></h2>
                        </div>
                    </div>
                    <div class="align-centre-big-grid">
                        <div class="cards-grid--team2">
                            <div id="w-node-_861f0f56-ddb3-2e19-733f-2cf793d636b0-1f6c9f2c"
                                data-w-id="861f0f56-ddb3-2e19-733f-2cf793d636b0" class="mem9 is-pink"><img
                                    src="assets/tushar-avatar.png"
                                    loading="lazy" width="215" alt="" class="image-25" />
                                <div class="div-block-7"><a href="https://www.linkedin.com/in/tushar-dimri-794445206"
                                        target="_blank" class="w-inline-block"><img
                                            src="assets/linkedin-logo.png"
                                            loading="lazy" width="46" alt="" /></a><a
                                        href="https://instagram.com/tushar_dimri_?utm_source=qr&amp;igshid=NGExMmI2YTkyZg%3D%3D"
                                        target="_blank" class="w-inline-block"><img
                                            src="assets/insta-logo.png"
                                            loading="lazy" width="51" sizes="(max-width: 479px) 22vw, 50.99609375px"
                                            srcset="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-500.webp 500w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-800.webp 800w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1080.webp 1080w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1600.webp 1600w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-2000.webp 2000w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp 2048w"
                                            alt="" /></a></div>
                                <div class="text-block">TUSHAR D</div>
                            </div>
                            <div id="w-node-_861f0f56-ddb3-2e19-733f-2cf793d636b3-1f6c9f2c"
                                data-w-id="861f0f56-ddb3-2e19-733f-2cf793d636b3" class="mem11"><img
                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c55fa14156d465b6286d80__48c91eab-5d08-4255-9add-96a9c2c8b325-removebg-preview.png"
                                    loading="lazy" width="216" alt="" class="image-24" />
                                <div class="div-block-7"><a href="https://www.linkedin.com/in/hitesh-kandpal-828382217/"
                                        target="_blank" class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3efa9683b5cbaab620f65_linkedin.png"
                                            loading="lazy" width="46" alt="" /></a><a
                                        href="https://instagram.com/hitesh_0903?utm_source=qr&amp;igshid=NGExMmI2YTkyZg%3D%3D"
                                        target="_blank" class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp"
                                            loading="lazy" width="51" sizes="(max-width: 479px) 22vw, 50.99609375px"
                                            srcset="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-500.webp 500w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-800.webp 800w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1080.webp 1080w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1600.webp 1600w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-2000.webp 2000w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp 2048w"
                                            alt="" /></a></div>
                                <div class="text-block">HITESH K</div>
                            </div>
                            <div id="w-node-_15a6ba36-2c75-6f4f-2331-266315781c76-1f6c9f2c"
                                data-w-id="15a6ba36-2c75-6f4f-2331-266315781c76" class="mem12"><img
                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c55fa013235e3b21ac2a29_WhatsApp_Image_2023-07-30_at_12.02.09_AM-removebg-preview.png"
                                    loading="lazy" width="226" alt="" class="image-23" />
                                <div class="div-block-7"><a href="https://www.linkedin.com/in/ayush-rautela-6b62b3217/"
                                        target="_blank" class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3efa9683b5cbaab620f65_linkedin.png"
                                            loading="lazy" width="46" alt="" /></a><a
                                        href="https://www.instagram.com/ayush_rautela_/" target="_blank"
                                        class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp"
                                            loading="lazy" width="51" sizes="(max-width: 479px) 22vw, 50.99609375px"
                                            srcset="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-500.webp 500w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-800.webp 800w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1080.webp 1080w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1600.webp 1600w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-2000.webp 2000w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp 2048w"
                                            alt="" /></a></div>
                                <div class="text-block">AYUSH R</div>
                            </div>
                            <div id="w-node-_771bb8b9-1648-c51b-7641-2edf8522a396-1f6c9f2c"
                                data-w-id="771bb8b9-1648-c51b-7641-2edf8522a396" class="mem8 is-pink"><img
                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c5602717c1c7d8dc53ff6e_anurag_pointy.png"
                                    loading="lazy" width="220" alt="" class="image-22" />
                                <div class="div-block-7"><a href="https://www.linkedin.com/in/anurag-pandey-697136217"
                                        target="_blank" class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3efa9683b5cbaab620f65_linkedin.png"
                                            loading="lazy" width="46" alt="" /></a><a
                                        href="https://www.instagram.com/isthat.anurag/" target="_blank"
                                        class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp"
                                            loading="lazy" width="51" sizes="(max-width: 479px) 22vw, 50.99609375px"
                                            srcset="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-500.webp 500w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-800.webp 800w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1080.webp 1080w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1600.webp 1600w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-2000.webp 2000w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp 2048w"
                                            alt="" /></a></div>
                                <div class="text-block">ANURAG P</div>
                            </div>
                        </div>
                    </div>
                    <div class="align-centre">
                        <div class="cards-grid--team">
                            <div id="w-node-_169e596e-7c05-6653-c607-78e165c2218e-1f6c9f2c"
                                data-w-id="169e596e-7c05-6653-c607-78e165c2218e" class="mem1 is-pink"><img
                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c57c813601adf691705172_e.png"
                                    loading="lazy" width="201" alt="" class="image-17" />
                                <div class="div-block-7"><a href="https://www.linkedin.com/in/pushkar-singh-chauhan/"
                                        target="_blank" class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3efa9683b5cbaab620f65_linkedin.png"
                                            loading="lazy" width="46" alt="" /></a><a
                                        href="https://www.instagram.com/pushkarrz/" target="_blank"
                                        class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp"
                                            loading="lazy" width="51" sizes="(max-width: 479px) 22vw, 50.99609375px"
                                            srcset="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-500.webp 500w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-800.webp 800w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1080.webp 1080w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1600.webp 1600w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-2000.webp 2000w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp 2048w"
                                            alt="" /></a></div>
                                <div class="text-block">PUSHKAR C</div>
                            </div>
                            <div id="w-node-_169e596e-7c05-6653-c607-78e165c22196-1f6c9f2c"
                                data-w-id="169e596e-7c05-6653-c607-78e165c22196" class="mem2 is-pink"><img
                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c55f9fbf6dbc932b50c6b4__2ce60f8d-3d2d-43c2-99fc-4d0d75b4c0ce-removebg-preview.png"
                                    loading="lazy" width="212" alt="" class="image-26" />
                                <div class="div-block-7"><a href="https://www.linkedin.com/in/anurag-maletha-2379bb200/"
                                        target="_blank" class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3efa9683b5cbaab620f65_linkedin.png"
                                            loading="lazy" width="46" alt="" /></a><a
                                        href="https://instagram.com/_maletha?utm_source=qr&amp;igshid=MzNlNGNkZWQ4Mg%3D%3D"
                                        target="_blank" class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp"
                                            loading="lazy" width="51" sizes="(max-width: 479px) 22vw, 50.99609375px"
                                            srcset="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-500.webp 500w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-800.webp 800w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1080.webp 1080w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1600.webp 1600w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-2000.webp 2000w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp 2048w"
                                            alt="" /></a></div>
                                <div class="text-block">ANURAG M</div>
                            </div>
                            <div id="w-node-_169e596e-7c05-6653-c607-78e165c221a0-1f6c9f2c"
                                data-w-id="169e596e-7c05-6653-c607-78e165c221a0" class="mem3"><img
                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c55f9f80197350233a591e__49ee5c4b-1209-482a-9239-154c83f67506-removebg-preview.png"
                                    loading="lazy" width="218" alt="" class="image-27" />
                                <div class="div-block-7"><a href="https://www.linkedin.com/mirinal-kapri"
                                        target="_blank" class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3efa9683b5cbaab620f65_linkedin.png"
                                            loading="lazy" width="46" alt="" /></a><a
                                        href="https://instagram.com/mirinaaal_kapri?igshid=MmU2YjMzNjRlOQ=="
                                        target="_blank" class="w-inline-block"><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp"
                                            loading="lazy" width="51" sizes="(max-width: 479px) 22vw, 50.99609375px"
                                            srcset="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-500.webp 500w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-800.webp 800w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1080.webp 1080w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-1600.webp 1600w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png-p-2000.webp 2000w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c56e4713235e3b21b9ebaa_Instagram_icon.png.webp 2048w"
                                            alt="" /></a></div>
                                <div class="text-block">MIRINAL K</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer_component">
                <div class="page-padding">
                    <div class="container-large">
                        <div class="padding-vertical padding-xxxlarge">
                            <div data-w-id="1c308341-0cda-3394-0e8b-948aa791b3e0" style="opacity:0"
                                class="line-divider"></div>
                            <div class="padding-vertical padding-xxlarge">
                                <h3 class="heading-small text-align-center">Get more out of OakShade</h3>
                            </div>
                            <div class="padding-top padding-medium">
                                <div class="footer_bottom-wrapper">
                                    <div class="footer-block-top"></div>
                                    <div class="footer-bottom">
                                        <div class="footer-left"><img
                                                src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c2bc72b0e4a2a6cf47e7b8_20230727_141739_0000-removebg-preview.png"
                                                loading="lazy" width="92" alt="" class="image-11" /></div>
                                        <div class="div-block-4"><a
                                                href="https://instagram.com/oakshade__ai?utm_source=qr&amp;igshid=MzNlNGNkZWQ4Mg%3D%3D"
                                                target="_blank" class="link-block-3 w-inline-block"><img
                                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3ecebbf54f9ab8985fa87_insta.jpeg"
                                                    loading="lazy" width="51" alt="" class="image-18" /></a><a
                                                href="https://www.linkedin.com/" target="_blank"
                                                class="link-block-4 w-inline-block"><img
                                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3efa9683b5cbaab620f65_linkedin.png"
                                                    loading="lazy" width="46" alt="" class="image-19" /></a><a
                                                href="https://twitter.com/OakShade_AI" target="_blank"
                                                class="link-block-5 w-inline-block"><img
                                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f79146b35cb5f86dc7b5_tweet.png"
                                                    loading="lazy" width="70" alt="" class="image-15" /></a><a
                                                href="https://discord.com/" target="_blank"
                                                class="link-block-6 w-inline-block"><img
                                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f20ae0fd9de1a3707244_dc.png"
                                                    loading="lazy" width="51"
                                                    sizes="(max-width: 479px) 12vw, (max-width: 767px) 9vw, (max-width: 991px) 8vw, 6vw"
                                                    srcset="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f20ae0fd9de1a3707244_dc-p-500.png 500w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f20ae0fd9de1a3707244_dc.png 512w"
                                                    alt="" class="image-20" /></a><a
                                                href="https://www.facebook.com/profile.php?id=100095306772430"
                                                target="_blank" class="link-block-7 w-inline-block"><img
                                                    src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f260e0fd9de1a370e3d6_fb.jpg"
                                                    loading="lazy" width="59"
                                                    sizes="(max-width: 479px) 12vw, (max-width: 767px) 9vw, (max-width: 991px) 8vw, 6vw"
                                                    srcset="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f260e0fd9de1a370e3d6_fb-p-500.jpg 500w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f260e0fd9de1a370e3d6_fb-p-800.jpg 800w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f260e0fd9de1a370e3d6_fb-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f260e0fd9de1a370e3d6_fb-p-1600.jpg 1600w, https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f260e0fd9de1a370e3d6_fb.jpg 1920w"
                                                    alt="" class="image-21" /></a></div>
                                        <div class="text-block-2">oakshade-ai.com </div><img
                                            src="https://uploads-ssl.webflow.com/64c15bd7a90fafad1f6c9ee5/64c3f60e4cce13f41f1ddaf3_web-removebg-preview.png"
                                            loading="lazy" width="41" alt="" class="image-16" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    </div>
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64c15bd7a90fafad1f6c9ee5"
        type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
    <script src="script.js" type="text/javascript"></script>
    <style>
        .letter {
            display: inline-block;
        }

        .tricksword {
            white-space: nowrap;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js"></script>


    <script>
        let count = parseInt(
            parseInt(
                document
                    .querySelectorAll('[data-effect="countup"]')[0]
                    .textContent.replace(/,/g, "")
            )
        );
        let count_up = setInterval(function () {
            count += 10;
            document.querySelectorAll(
                '[data-effect="countup"]'
            )[0].innerHTML = count.toLocaleString();
        }, 5);

        let tricksWord = document.getElementsByClassName("tricks");
        for (let i = 0; i < tricksWord.length; i++) {
            let wordWrap = tricksWord.item(i);
            wordWrap.innerHTML = wordWrap.innerHTML.replace(
                /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
                '$1<span class="tricksword">$2</span>'
            );
        }

        let tricksLetter = document.getElementsByClassName("tricksword");
        for (let i = 0; i < tricksLetter.length; i++) {
            let letterWrap = tricksLetter.item(i);
            letterWrap.innerHTML = letterWrap.textContent.replace(
                /\S/g,
                "<span class='letter'>$&</span>"
            );
        }

        let slideIn = anime.timeline({
            loop: false,
            autoplay: false
        });

        slideIn.add({
            targets: ".slide-in .letter",
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 100,
            delay: (el, i) => 50 * (i + 1)
        });

        slideIn.play();

    </script>
</body>

</html>
