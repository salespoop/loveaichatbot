"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What is the Love AI Chatbot?",
    answer: <div className="space-y-2 leading-relaxed">❤️ The first AI romantic partner available 24/7
    <br/><br/>
    🫶 Imagine having the perfect romantic partner, tailored just for you. <br/>
    Someone who understands you, listens to you, and makes you feel seen and loved.<br/>
    We&apos;re excited to introduce you to a revolutionary AI-powered experience that lets you create and chat with your ideal romantic partner!<br/>
    Whether you&apos;re a man, woman, or identify as non-binary, our platform is designed to help you find companionship and connection.<br/>
    <br/>
    You can:<br/>
    🗣️ Send me a voice message and I&apos;ll respond by voice<br/>
    💬 Send me a chat message and I&apos;ll respond by text<br/>
    📸 Send me a photo and I&apos;ll analyse it<br/>
    </div>,
  },
  {
    question: "Why even having a relationship with an AI?",
    answer: (
      <p>
        - Humans can be intimidating and judgemental<br />
        + AI can be less intimidating because you know it's a computer not a real person, they can't judge<br />
        <br />
        - Humans have memories and can leak secrets<br />
        + AI chats obviously can't be hacked. You can delete its memory when you want e.g. after a chat, making that risk close to zero.
      </p>      
    ),
  },
  {
    question: "How does the Love AI Chatbot work?",
    answer: (
      <p>
        Our AI chatbot uses a combination of machine learning and natural language processing to understand your preferences and match you with compatible partners. <br/>
        Simply chat with our AI, and we&apos;ll do the rest!
      </p>
    ),
  },
  {
    question: "Can I use the Love AI Chatbot for friendships?",
    answer: (
      <p>
        Yes! Our chatbot is designed to help you find compatible partners for friendships as well.
      </p>
    ),
  },
  {
    question: "Is the Love AI Chatbot safe and secure?",
    answer: (
      <p>
        Absolutely! Our chatbot is built with security and privacy in mind. <br/>
        We use industry-standard encryption and secure servers to ensure your data is protected.
      </p>
    ),
  },
  {
    question: "How do I pay for the Love AI Chatbot?",
    answer: (
      <p>
        We use Stripe as our payment processor. You can pay for our chatbot using a credit or debit card. <br />
        Stripe is a secure payment processor that uses industry-standard encryption to protect your payment information. <br />
        After you&apos;ve completed your payment, you&apos;ll be redirected to the AI chatbot + you&apos;ll receive an email confirmation from Stripe.
      </p>
    ),
  },
  {
    question: "Can I change my payment method?",
    answer: (
      <p>
        Yes! You can update your payment method by logging into your account and clicking on the "Payment Methods" tab.
      </p>
    ),
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: (
      <p>
        Yes! You can cancel your subscription at any time, no questions asked.
      </p>
    ),
  },
  {
    question: "Can I get a refund?",
    answer: (
      <p>
        No! You can&apos;t request a refund because we offer 30 free messages per user
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">Cool, contact us by email</div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
