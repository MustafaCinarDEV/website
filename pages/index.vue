<template>
    <main>

    <div class="container">
      <div class="logo w-40 h-40 rounded-full ring-4 ring-gray-200 dark:ring-gray-700" style="background-position: center center; background-image: url(https://media.discordapp.net/attachments/818093236173799424/824207085835124755/Dipper_Avatar.png); background-size: cover;"><img src="https://media.discordapp.net/attachments/818093236173799424/824207085835124755/Dipper_Avatar.png" draggable="false" alt="image" class="invisible rounded-md sm:transform" width="100%" height="100%"></div>
        <div class="text space-y-px sm:w-9/20">
       <h1> Hi all, I'm AdemCan Certel <span class="wave">👋</span></h1>
    <h1 class="text-2xl font-normal">Let's introduce myself first and then talk about what I've done. I live in Istanbul/Turkey at the age of 17, I'm a high school student. A passionate Front End Developer 🚀 have been in the software industry since 2018 and developing my own career.</h1>
          <Status />
           <a href="https://github.com/AdemCanCertel" class="icon-button github" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i><span></span></a><a href="https://www.linkedin.com/in/ademcancertel/" class="icon-button linkedin" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i><span></span></a><a href="mailto:ademcancertel619@gmail.com" class="icon-button google" target="_blank" rel="noopener noreferrer"><i class="fab fa-google"></i><span></span></a><a href="https://gitlab.com/AdemCan0BEY" class="icon-button gitlab" target="_blank" rel="noopener noreferrer"><i class="fab fa-gitlab"></i><span></span></a><a href="https://www.facebook.com/ademcancertel" class="icon-button facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i><span></span></a><a href="https://www.instagram.com/ademcancertel_/" class="icon-button instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i><span></span></a>
    </div>
    </div>


  <div class="container">
    <div class="text space-y-px sm:w-10/12">
        <h1 class="text-2xl font-normal">Projects</h1>
      <GitHubRepos/>         
</div>
  </div>


    </main>
</template>

<script>
import Navbar from '~/components/common/Navbar'
import GitHubRepos from '~/components/GitHubRepos'

export default {
  components: {
    Navbar,
    GitHubRepos,

  },
}
</script>




<style lang="postcss">

html {
  margin: 0;
  padding: 0;
}

* {
    color: white;
}

body {
    background-color: #171c28;
}

.container {
  width: 58.333333%;
  margin-left: auto;
  margin-right: auto;
  border-width: 0;
  padding-top: 6rem;
  padding-bottom: 6rem;
 }

.logo {
  border-radius: 8px;
  overflow: hidden;
  width: 150px;
  height: 150px;
  justify-content: flex-end;
  display: flex;
  float: right;
  box-shadow: 2px 3px 4px #23272A;
}

.logo img {
  display: block;
  min-width: 100%;
  min-height: 100%;
}

.text {
  --tw-space-x-reverse: 0;
  margin-right:calc(2rem * var(--tw-space-x-reverse));
  margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)));

}

section {
  min-width: 300px;
  transform: translateY(-50%);
  max-width: 750px;
  margin: auto;
  padding: 1em;
}
@media (max-width: 600px) {
  section {
    transform: translateY(-10%) translateX(-2vw);
    width: 65vw;
    min-width: 200px;
  }
}

.badge {
  @apply inline-block bg-gray-200 dark:bg-gray-700  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200;
  &:hover {
    @apply bg-gray-300;
  }
}

.card-image {
  max-width: 100%;
  height: auto;
  width: 250px;
}
.card-title {
  color: #000000;
  font-size: 22px;
  line-height: 24px;
  font-weight: 700;
  margin: 15px 0 0 0;
}
.card-subtitle {
  color: #666666;
  font-size: 17px;
  line-height: 1.5rem;
}
.project-card {
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(211, 211, 211, 0.397);
  justify-content: center;
}
.project-card-light {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.project-card-dark {
  box-shadow: 0px 10px 30px -15px #d9dbdf;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.25s ease;
}

.project-detail {
  text-align: center;
}
.project-card-light:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px -10px;
}
.project-card-dark:hover {
  box-shadow: #d9dbdf 0px 2px 2px -10px;
}
.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  text-align: center;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem 1rem;
}

.project-card-footer span.project-tag {
  background: #55198b;
  color: #f5f2f4;
  vertical-align: middle;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  white-space: nowrap;
  line-height: 1.5;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0 0.75em;
  cursor: pointer;
  transition: 0.2s ease-in;
}

@media (max-width: 768px) {
  .project-subtitle {
    font-size: 16px;
    text-align: center;
  }
}

.wave {
  animation-name: wave-animation; 
  animation-duration: 2.5s;        
  animation-iteration-count: infinite;  
  transform-origin: 70% 70%; 
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) } 
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) } 
  100% { transform: rotate( 0.0deg) }
}

body { font-size: 3.5em }
h1 { font-size: 0.5em }

.social-media-div {
  font-size: 2em;
}

.icon-button {
  margin-bottom: 10px;
}

.icon-button i {
  color: white;
  border-radius: 2.6rem;
  cursor: pointer;
  display: inline-block;
  font-size: 1.3rem;
  height: 2.6rem;
  line-height: 2.6rem;
  margin: 0 5px;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 2.6rem;
  margin-bottom: 10px;
  transition: 0.2s ease-in;
}

.facebook i {
  background-color: #3b5998;
}

.linkedin i {
  background-color: #0e76a8;
}

.github i {
  background-color: #333;
}

.gitlab i {
  background-color: #fca326;
}

.google i {
  background-color: #ea4335;
}

.twitter i {
  background-color: #1da1f2;
}

.medium i {
  background-color: #000;
}

.stack-overflow i {
  background-color: #f48024;
}

.instagram i {
  background-color: #c13584;
}

.twitter i:hover,
.google i:hover,
.gitlab i:hover,
.github i:hover,
.linkedin i:hover,
.facebook i:hover,
.instagram i:hover,
.stack-overflow i:hover,
.medium i:hover {
  background-color: black;
}

@media (max-width: 768px) {
  .social-media-div {
    text-align: center;
  }
}



</style>