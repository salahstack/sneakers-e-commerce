/**
 * Assets
 */
import { about } from "../assets";


const About = () => {
  return (
    <section className="pt-[124px] md:pt-32">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <figure className="h-96 rounded-lg overflow-hidden w-full max-w-[500px] mx-auto">
            <img src={about} alt="about" className="w-full h-full" />
          </figure>
        <div className="text-center">
          <h1 className="text-3xl font-medium mb-6">About Me</h1>
          <p className="w-full max-w-[700px] text-onSurface">As a passionate and versatile Full Stack Developer, I thrive on building innovative and scalable web applications. With expertise in front-end and back-end development, I craft seamless user experiences using modern frameworks and technologies. I enjoy solving complex problems, collaborating with teams, and constantly learning to stay ahead in the ever-evolving tech landscape.</p>
        </div>
      </div>
    </section>
  )
}

export default About