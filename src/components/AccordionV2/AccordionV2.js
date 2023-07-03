import { useState } from 'react';
import './accordion.styles.css';
import AccordionItem from './components/AccordionItem';

function AccordionV2() {
  const faqs = [
    {
      title: 'Where are these chairs assembled?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
    },
    {
      title: 'How long do I have to return my chair?',
      text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
    },
    {
      title: 'Do you ship to countries outside the EU?',
      text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
    },
    {
      title: 'Thinking with React',
      text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
    },
  ];

  const [currOpen, setCurrOpen] = useState(false);

  return (
    <div>
      <h1>Accordions V2</h1>
      <div className="accordion">
        {faqs.map((faq, idx) => (
          <AccordionItem title={faq.title} num={idx} key={faq.title} currOpen={currOpen} onOpen={setCurrOpen}>
            {faq.text}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

export default AccordionV2;
