//import react icons
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <section className="relative isolate overflow-hidde px-6 pb-32 sm:pb-32 sm:py-18 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h1 className="flex justify-center items-center text-gray-900 font-bold text-4xl tracking-tight sm:text-6xl ">About Me</h1>
                    <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p> "Full Stack Web Developer | MERN | DevOps | DSA Enthusiast | Freelancer  <br /> Student @VIIT” </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                        className="mx-auto h-64 w-48 rounded-full"
                        src="makarand.jpg"
                        alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-lg">
                        <div className="font-semibold text-gray-900">Makarand Khiste</div>
                        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        <div className="text-gray-600">Founder</div>
                        </div>
                    </figcaption>
                    <div className="flex justify-center mt-6">
                      <a href="https://github.com/makarand-20" target='_blank'><button className="w-10 h-10 rounded-full bg-gray-500 text-white shadow-lg mx-2 flex items-center justify-center">
                        <FaGithub />
                      </button></a>
                      <a href="https://www.linkedin.com/in/makarand-khiste/" target='_blank'><button className="w-10 h-10 rounded-full bg-gray-500 text-white shadow-lg mx-2 flex items-center justify-center">
                        <FaLinkedinIn />
                      </button></a>
                      <a href="https://twitter.com/MakarandKhiste" target='_blank'><button className="w-10 h-10 rounded-full bg-gray-500 text-white shadow-lg mx-2 flex items-center justify-center">
                        <FaTwitter />
                      </button></a>
                      <a href="https://www.instagram.com/maku_khiste/" target='_blank'><button className="w-10 h-10 rounded-full bg-gray-500 text-white shadow-lg mx-2 flex items-center justify-center">
                        <FaInstagram />
                      </button></a>
                    </div>
                    </figure>
                </div>
    </section>
  )
}

export default AboutMe