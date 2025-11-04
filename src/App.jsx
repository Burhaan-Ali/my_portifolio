import React from "react"
import logo from "./assets/logo-02.png"
import hero_iconi_mg from "./assets/hero icon-03.png"
import hero_img from "./assets/b-hero-02.png"
import aboutImg from "./assets/hero img-04.png"
function App() {

  return (
    <>
      <div class="bg-gray-50 text-gray-800 ont-sans leading-relaxed dark:bg-gray-900 dark:text-gray-50">
          <div class="px-6 bg-white shadow-sm dark:shadow-lg dark:shadow-[#fff2] dark:bg-gray-800">
              <header class="header py-3">
                  <div class=" max-w-5xl flex mx-auto justify-between">
                      <div class="flex gap-2 items-center">
                          <img src={logo} class="w-[30px]" alt="" srcset=""/>
                          <div class="text-2xl font-bold">BURHAAN</div>
                      </div>
                      <nav class="md:flex text-md space-x-4 items-center hidden">
                          <a href="#home" class="hover:text-[#f3911d]">Home</a>
                          <a href="#home" class="hover:text-[#f3911d]">About</a>
                          <a href="#home" class="hover:text-[#f3911d]">Services</a>
                          <a href="#home" class="hover:text-[#f3911d]">Contact Us</a>
                      </nav>
                      <div class="border border-[#0c2650] px-2 rounded md:hidden text-xl flex justify-center items-center">
                          <i class="fa-solid fa-bars"></i>
                      </div>
                  </div>
              </header>
          </div>
          <div class="px-6 py-12 " id="home">
              <div class="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1">
                  <div class="flex flex-col justify-center gap-5">
                      <img src={hero_iconi_mg} class="w-8" alt="" srcset=""/>
                      <div class="text-lg font-semibold">I am <span class="text-[#f3911d]">burhaan</span> ali</div>
                      <div class="text-3xl md:text-4xl font-extrabold">Full Stack Developer</div>
                      <p class="text-lg text-gray-600 dark:text-gray-100">I build smart, functional web systems that simplify daily office and learning operations. 
                          {/* <strong>PHP | MySQL | React | Tailwind CSS</strong>  */}
                      </p>
                      <div class="flex gap-1 flex-wrap ">
                          <div class="p-1  rounded">
                              <i class="fab fa-php text-3xl text-[#f3911d]"></i>
                          </div>
                          <div class="p-1 px-2 rounded">
                              <i class="fas fa-database text-3xl text-[#f3911d]"></i>
                          </div>
                          <div class="p-1 px-2 rounded">
                              <i class="fab fa-react text-3xl text-[#f3911d]"></i>
                          </div>
                      </div>
                      <div class="flex gap-3">
                          <a href="#projects" class="dark:text-gray-100 inline-block px-5 py-2 bg-[#0c2650] text-white rounded-lg shadow hover:bg-[#f3911d]">View Projects</a>
                          <a href="#contact" class="dark:text-gray-100 inline-block px-5 py-2 border border-[#0c2650] dark:border-[#fff9] text-[#0c2650] hover:text-white hover:border-[#f8faff] rounded-lg hover:bg-[#f3911d]">Contact Me</a>
                      </div>
                      <div class="text-sm text-gray-500 dark:text-gray-300">
                          <strong>Open for:</strong> Freelance projects, collaborations, and full-time roles.
                      </div>
                  </div>
                  <div class="md:flex justify-end items-center hidden">
                      <img src={hero_img} class="w-[75%]" alt="" srcset=""/>
                  </div>
              </div>
          </div>
          <div class="px-6 py-12 space-y-8" >
              {/* <div class="flex flex-col md:items-center items-start justify-center gap-4">
                  <div class="font-semibold text-3xl"> <span class="text-[#f3911d]">My</span> Services</div>
                  <div class="flex gap-1">
                      <div class="w-[15px] h-[2px] bg-[#0c2650] rounded-full"></div>
                      <div class="w-[50px] h-[2px] bg-[#f3911d] rounded-full"></div>
                      <div class="w-[15px] h-[2px] bg-[#0c2650] rounded-full"></div>
                      <div class="w-[15px] h-[2px] bg-[#0c2650] rounded-full"></div>
                      <div class="w-[15px] h-[2px] bg-[#0c2650] rounded-full"></div>
                  </div>
              </div>  */}
              <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 dark:text-[#0c2650]">
                  <div class="bg-linear-to-bl from-white to-indigo-100 rounded shadow-md border cursor-pointer group hover:bg-[#0c2650] p-4 w-[300px] py-6">
                      <div class="flex flex-col items-center">
                          <div class="text-center text-[#f3911d]">
                              <i class="fas fa-computer text-4xl"></i>
                          </div>
                          <div class="font-semibold text-xl">Web Developement</div>
                      </div>
                  </div>
                  <div class="bg-gradient-to-t from-white to-indigo-100 rounded shadow-md border cursor-pointer group hover:bg-[#0c2650] p-4 w-[300px] py-6">
                      <div class="flex flex-col items-center">
                          <div class="text-center text-[#f3911d]">
                              <i class="fas fa-computer text-4xl"></i>
                          </div>
                          <div class="font-semibold text-xl">Web Design</div>
                      </div>
                  </div>
                  <div class="bg-gradient-to-tr from-white to-indigo-100 rounded shadow-md border cursor-pointer group hover:bg-[#0c2650] p-4 w-[300px] py-6">
                      <div class="flex flex-col items-center">
                          <div class="text-center text-[#f3911d]">
                              <i class="fas fa-computer text-4xl"></i>
                          </div>
                          <div class="font-semibold text-xl">Graphic Design</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="px-6 py-12 space-y-8 bg-[#0c2650] text-[#f5f8fa]" id="about">
              <div class="flex flex-col items-center justify-center gap-4">
                  <div class="font-semibold text-3xl"> <span class="text-[#f3911d]">About</span> Me</div>
                  <div class="flex gap-1">
                      <a href="#home" class="w-[15px] h-[2px] bg-[#fff] rounded-full"></a>
                      <a href="#about" class="w-[50px] h-[2px] bg-[#f3911d] rounded-full"></a>
                      <a href="#project" class="w-[15px] h-[2px] bg-[#fff] rounded-full"></a>
                      <a href="#contact" class="w-[15px] h-[2px] bg-[#fff] rounded-full"></a>
                      <a href="#" class="w-[15px] h-[2px] bg-[#fff] rounded-full"></a>
                  </div>
              </div>
              <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
                  <div class="flex justify-start items-center ">
                      <img src={aboutImg} class="w-[100%] " alt="" srcset=""/>
                  </div>
                  <div class="col-span-2  flex items-center">
                      <div class="space-y-1 text-md bg-[#fff1] p-3 shadow-lg shadow-[#fff2] rounded">
                          <p class="">Hi, I'm <strong><span class="text-[#f3911d]">Burhaan</span> ali</strong>, a passionate IT and Web Developer 
                              focused on creating powerful, relaible and user-friendly systems. <br/>
                              I specialize in building management systems, e-learning platforms, and custom web applications. <br/>
                          </p>
                          <p>
                              I use <strong>PHP, MySQL, HTML, CSS, JavaScript and React</strong> to design solutions that make everyday processes faster and more efficient.
                          </p>
                          <div class="">
                              <p class="">
                                  I've worked on projects such as:
                              </p>
                              <ul class="list-disc px-5">
                                  <li>Office Record Management System </li>
                                  <li>Expense Trackerg App</li>
                                  <li>Eye Clinic & Hosptal Management System</li>
                                  <li>Vegetable E-commerce Platfrom</li>
                              </ul>
                          </div>
                          <p class="">
                              I'm always learning and exploring new technologies to enhance my developement skills.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="px-6 py-12 space-y-12" id="project">
              <div class="flex flex-col items-center justify-center gap-4">
                  <div class="font-semibold text-3xl"> <span class="text-[#f3911d]">My</span> Projects</div>
                  <div class="flex gap-1">
                      <a href="#home" class="w-[15px] h-[2px] bg-[#0c2650] rounded-full dark:bg-[#fff]"></a>
                      <a href="#about" class="w-[15px] h-[2px] bg-[#0c2650] rounded-full dark:bg-[#fff]"></a>
                      <a href="#project" class="w-[50px] h-[2px] bg-[#f3911d] rounded-full"></a>
                      <a href="#contact" class="w-[15px] h-[2px] bg-[#0c2650] rounded-full dark:bg-[#fff]"></a>
                      <a href="#" class="w-[15px] h-[2px] bg-[#0c2650] rounded-full dark:bg-[#fff]"></a>
                  </div>
              </div>
              <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div class="flex justify-center ">
                      <div class="rounded overflow-hidden border border-[#] shadow-md dark:shadow-[#fff8] w-[350px] hover:text-[#fff] group hover:bg-[#0c2650] cursor-pointer">
                          <div class="text-center bg-[#f3911d] text-white p-2 group-hover:bg-[#0c2650] font-semibold">Weather Now App</div>
                          <div class="space-y-2">
                              <div class="w-100 h-[200px] p-1 bg-[#fff] overflow-hidden" >
                                  <img src="./images/busines card back-02.jpg" alt="" class="w-[100%] h-[100%]" srcset=""/>
                              </div>
                              <p class="px-4"> Cid walba oo itoobiya taageerta waa in dalka laga tarxiilaa,ama xasiga la dhigaa hadii kale waxaa imaan doono qaa imiin.</p>
                              <div class="flex px-3 gap-3 ">
                                  <div class="text-[#f3911d] group-hover:text-[#fff] text-3xl">
                                      <i class="fab fa-react"></i>
                                  </div>
                                  <div class="text-[#f3911d] group-hover:text-[#fff] text-3xl">
                                      <i class="fas fa-database"></i>
                                  </div>
                                  <div class="text-[#f3911d] group-hover:text-[#fff] text-3xl">
                                      <i class="fab fa-php"></i>
                                  </div>
                              </div>
                              <div class="flex p-4">
                                  <a href="#projects" class="w-[100%] py-2 group-hover:bg-[#f3911d] bg-[#0c2650] text-white rounded-md text-center font-semibold shadow hover:bg-[#f3911d]">Demo</a>
                              </div>
                          </div>
                      </div>
                  </div> 
                  <div class="flex justify-center ">
                      <div class="rounded overflow-hidden border border-[#] shadow-md dark:shadow-[#fff8] w-[350px] hover:text-[#fff] group hover:bg-[#0c2650] cursor-pointer">
                          <div class="text-center bg-[#f3911d] text-white p-2 group-hover:bg-[#0c2650] font-semibold">Weather Now App</div>
                          <div class="space-y-2">
                              <div class="w-100 h-[200px] p-1 bg-[#fff] overflow-hidden" >
                                  <img src="./images/busines card front-03.jpg" alt="" class="w-[100%] h-[100%]" srcset=""/>
                              </div>
                              <p class="px-4"> Cid walba oo itoobiya taageerta waa in dalka laga tarxiilaa,ama xasiga la dhigaa hadii kale waxaa imaan doono qaa imiin.</p>
                              <div class="flex px-3 gap-3 ">
                                  <div class="text-[#f3911d] group-hover:text-[#fff] text-3xl">
                                      <i class="fab fa-react"></i>
                                  </div>
                                  <div class="text-[#f3911d] group-hover:text-[#fff] text-3xl">
                                      <i class="fas fa-database"></i>
                                  </div>
                                  <div class="text-[#f3911d] group-hover:text-[#fff] text-3xl">
                                      <i class="fab fa-php"></i>
                                  </div>
                              </div>
                              <div class="flex p-4">
                                  <a href="#projects" class="w-[100%] py-2 group-hover:bg-[#f3911d] bg-[#0c2650] text-white rounded-md text-center font-semibold shadow hover:bg-[#f3911d]">Demo</a>
                              </div>
                          </div>
                      </div>
                  </div> 
                  <div class="flex justify-center ">
                      <div class="rounded overflow-hidden border border-[#] shadow-md dark:shadow-[#fff8] w-[350px] hover:text-[#fff] group hover:bg-[#0c2650] cursor-pointer">
                          <div class="text-center bg-[#f3911d] text-white p-2 group-hover:bg-[#0c2650] font-semibold">Weather Now App</div>
                          <div class="space-y-2">
                              <div class="w-100 h-[200px] p-1 bg-[#fff] overflow-hidden" >
                                  <img src="./images/bg-04.jpg" alt="" class="w-[100%] h-[100%]" srcset=""/>
                              </div>
                              <p class="px-4"> Cid walba oo itoobiya taageerta waa in dalka laga tarxiilaa,ama xasiga la dhigaa hadii kale waxaa imaan doono qaa imiin.</p>
                              <div class="flex px-3 gap-3 ">
                                  <div class="text-[#f3911d] group-hover:text-[#fff] text-3xl">
                                      <i class="fab fa-react"></i>
                                  </div>
                                  <div class="text-[#f3911d] group-hover:text-[#fff] text-3xl">
                                      <i class="fas fa-database"></i>
                                  </div>
                                  <div class="text-[#f3911d] group-hover:text-[#fff] text-3xl">
                                      <i class="fab fa-php"></i>
                                  </div>
                              </div>
                              <div class="flex p-4">
                                  <a href="#projects" class="w-[100%] py-2 group-hover:bg-[#f3911d] bg-[#0c2650] text-white rounded-md text-center font-semibold shadow hover:bg-[#f3911d]">Demo</a>
                              </div>
                          </div>
                      </div>
                  </div> 
              </div>
          </div>
          <div class="px-6 py-12 space-y-8  bg-[#fff] dark:bg-black" id="contact">
              <div class="flex flex-col items-center justify-center gap-4">
                  <div class="font-semibold text-3xl"> <span class="text-[#f3911d]">Contact</span> Me</div>
                  <div class="flex gap-1">
                      <a href="#home" class="w-[15px] h-[2px] bg-[#0c2650] rounded-full dark:bg-[#fff]"></a>
                      <a href="#about" class="w-[15px] h-[2px] bg-[#0c2650] rounded-full dark:bg-[#fff]"></a>
                      <a href="#project" class="w-[15px] h-[2px] bg-[#0c2650] rounded-full dark:bg-[#fff]"></a>
                      <a href="#contact" class="w-[50px] h-[2px] bg-[#f3911d] rounded-full"></a>
                      <a href="#" class="w-[15px] h-[2px] bg-[#0c2650] rounded-full dark:bg-[#fff]"></a>
                  </div>
              </div>
              <div class="max-w-5xl mx-auto">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:space-y-0 space-y-8">
                      <div class="space-y-5">
                          <div class="font-bold text-[#f3911d] text-xl">Get In Touch</div>
                          <div class="font-semibold">Interested in working together or want to see a demo? Send me a message.</div>
                          <a href="mailto:burhaancali784@gmail.com" class="flex items-center gap-3 font-semibold text-blue-900 dark:text-[#fff]">
                              <div class="rounded-lg bg-[#0c265022] dark:bg-gray-800 hover:bg-[#f3911d] hover:text-[#fff] w-10 py-1 flex justify-center items-center">
                                  <i class="far fa-envelope text-xl"></i>
                              </div>
                              <div class="space-y-[-5px]">
                                  <div class="text-md">Email</div>
                                  <div class="text-sm text-gray-600">burhaancali784@gmail.com</div>
                              </div>
                          </a>
                          <a href="tel:+252614048777" class="flex items-center gap-3 font-semibold text-blue-900 dark:text-[#fff]">
                              <div class="rounded-lg bg-[#0c265022] dark:bg-gray-800 hover:bg-[#f3911d] hover:text-[#fff] w-10 py-1 flex justify-center items-center">
                                  <i class="far fa-message text-xl"></i>
                              </div>
                              <div class="space-y-[-5px]">
                                  <div class="text-md">WhatsApp</div>
                                  <div class="text-sm text-gray-600">+252614048777</div>
                              </div>
                          </a>
                          <a href="#" class="flex items-center gap-3 font-semibold text-blue-900 dark:text-[#fff]">
                              <div class="rounded-lg bg-[#0c265022] dark:bg-gray-800  hover:bg-[#f3911d] hover:text-[#fff] w-10 py-1 flex justify-center items-center">
                                  <i class="far fa-map text-xl"></i>
                              </div>
                              <div class="space-y-[-5px]">
                                  <div class="text-md">Location</div>
                                  <div class="text-sm text-gray-600">Mogadishu Somalia</div>
                              </div>
                          </a>
                          <div class="font-bold text-xl">Connect on social media</div>
                          <div class="flex gap-4">
                              <a href="tel:+252614048777" class="flex items-center gap-3 font-semibold text-blue-900">
                                  <div class="rounded-lg bg-[#0c265022] dark:text-[#fff] dark:bg-gray-800 hover:bg-[#f3911d] hover:text-[#fff] w-10 py-1 flex justify-center items-center">
                                      <i class="fab fa-facebook text-xl"></i>
                                  </div>
                              </a>
                              <a href="tel:+252614048777" class="flex items-center gap-3 font-semibold text-blue-900">
                                  <div class="rounded-lg bg-[#0c265022] dark:text-[#fff] dark:bg-gray-800 hover:bg-[#f3911d] hover:text-[#fff] w-10 py-1 flex justify-center items-center">
                                      <i class="fab fa-instagram text-xl"></i>
                                  </div>
                              </a>
                              <a href="tel:+252614048777" class="flex items-center gap-3 font-semibold text-blue-900">
                                  <div class="rounded-lg bg-[#0c265022] dark:text-[#fff] dark:bg-gray-800 hover:bg-[#f3911d] hover:text-[#fff] w-10 py-1 flex justify-center items-center">
                                      <i class="fab fa-linkedin text-xl"></i>
                                  </div>
                              </a>
                          </div>
                      </div>
                      <form action="#" class="space-y-3 border p-5 shadow-xl dark:shadow-[#fff4] rounded-xl bg-[#fff] dark:text-gray-600">
                          <div class="font-bold text-xl">Send me a message</div>
                          <div class="grid grid-cols-1 space-y-5">
                              <div class="flex flex-col space-y-1 col-span-3">
                                  <label for="name" class="font-semibold">Name</label>
                                  <input type="text" placeholder="Your name" class="border shadow-sm outline-none border-1 rounded p-1 px-3" id=""/>
                              </div>
                              <div class="flex flex-col space-y-1 md:col-span-2 col-span-3">
                                  <label for="name" class="font-semibold">Email</label>
                                  <input type="email" placeholder="example@gmail.com" class="border shadow-sm outline-none border-1 rounded p-1 px-3" id=""/>
                              </div>
                              <div class="flex flex-col space-y-1 col-span-3">
                                  <label for="name" class="font-semibold">Message</label>
                                  <textarea name="" placeholder="Write your message" class="col-span-3 border shadow-sm outline-none border-1 rounded p-1 px-3" id=""></textarea>
                              </div>
                          <button type="submit" class="col-span-3 px-4 py-1 bg-[#0c2650] shadow-sm text-white rounded">Send Message</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div class="px-6 pt-12 bg-[#0c2650]">
              <div class="max-w-5xl mx-auto space-y-8">
                  <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                      <div class="md:flex md:col-span-2 flex-col col-span-2 lg:col-span-1 hidden gap-4">
                          <div class="flex text-3xl items-center gap-3">
                              <img src="./images/logo-03.png" class="w-12 h-12" alt="" srcset=""/>
                              <p class="font-semibold text-[#fff]">BURHAAN</p>
                          </div>
                          <p class="text-sm text-[#fffc]">I build smart, functional web systems that simplify daily office and learning operations. 
                              {/* <strong>PHP | MySQL | React | Tailwind CSS</strong> */}
                          </p>
                      </div>
                      <div class="space-y-5">
                          <div class="font-bold text-[#fff] text-xl">Quick Links</div>
                          <div class="nav text-[#fffc] text-md flex flex-col">
                              <a href="#home" class="">Home</a>
                              <a href="#about" class="">About</a>
                              <a href="#project" class="">Projects</a>
                              <a href="#contact" class="">Contact</a>
                          </div>
                      </div>
                      <div class="space-y-5">
                          <div class="font-bold text-[#fff] text-xl">Services</div>
                          <div class="nav text-[#fffc] text-md flex flex-col">
                              <a href="#" class="">Web Design</a>
                              <a href="#" class="">Web Developement</a>
                              <a href="#" class="">Graphic Design</a> 
                          </div>
                      </div>
                      <div class="space-y-5">
                          <div class="font-bold text-[#fff] text-xl">Get In Touch</div>
                          <div class="flex gap-4">
                              <a href="tel:+252614048777" class="flex items-center gap-3 font-semibold text-white">
                                  <div class="rounded-lg bg-[#f3911d]  hover:bg-[#fff] hover:text-[#f3911d] w-10 py-1 flex justify-center items-center">
                                      <i class="fab fa-facebook text-xl"></i>
                                  </div>
                              </a>
                              <a href="tel:+252614048777" class="flex items-center gap-3 font-semibold text-white">
                                  <div class="rounded-lg bg-[#f3911d]  hover:bg-[#fff] hover:text-[#f3911d] w-10 py-1 flex justify-center items-center">
                                      <i class="fab fa-instagram text-xl"></i>
                                  </div>
                              </a>
                              <a href="tel:+252614048777" class="flex items-center gap-3 font-semibold text-white">
                                  <div class="rounded-lg bg-[#f3911d]  hover:bg-[#fff] hover:text-[#f3911d] w-10 py-1 flex justify-center items-center">
                                      <i class="fab fa-linkedin text-xl"></i>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="grid grid-cols-3 text-[#fffc] py-6 border-[#fff8] border-t-[1px] gap-5">
                      <div class="md:col-span-2 col-span-3 flex md:justify-start justify-center">
                          <p>&copy;2025 <a href="">Burhaan Ali | Developed With ❤️</a></p>
                      </div>
                      <a href="#home" class="flex items-center md:justify-end justify-center md:col-span-1 col-span-3 gap-3 font-semibold text-white">
                              <div class="rounded-lg bg-[#0c265022] border  hover:bg-[#f3911d] hover:text-[#fff] w-10 py-1 flex justify-center items-center">
                                  <i class="fas fa-arrow-up text-xl"></i>
                              </div>
                              <div class="space-y-[-5px]">
                                  <div class="text-md">Back To Top</div>
                              </div>
                          </a>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
