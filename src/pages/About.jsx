/**
 * Assets
 */
import { about } from "../assets";


const About = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-8 flex-col md:flex-row">
          <figure className="h-96 rounded-lg overflow-hidden">
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