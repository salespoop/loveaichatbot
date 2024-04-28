import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import hero_image from "@/app/hero.png";
import telegram_image from "@/app/telegram-icon.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
        Your AI romantic partner chatbot
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
        Sometimes, all we need is someone to listen.<br />
        Our AI chatbot is here to lend an ear and make you feel seen.
        </p>
        <button className="btn btn-primary btn-wide flex justify-center items-center">
          <a href={config.telegram_channel} alt="Telegram Love AI Chatbot Channel" className="flex items-center">
            Get {config.appName}
            <span className="flex items-center justify-center ml-2">
              <Image
                src={telegram_image}
                alt="AI Boyfriend/Girlfriend Chatbot"
                width={30}
                height={30}
              />
            </span>
          </a>
      </button>


        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src={hero_image}
          alt="AI Boyfriend/Girlfriend Chatbot"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
