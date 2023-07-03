import './accordion.styles.css';
import AccordionItem from './components/AccordionItem';

function Accordion() {
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
  ];

  return (
    <div>
      <h1>Accordions</h1>
      <div className="accordion">
        {faqs.map((faq, idx) => (
          <AccordionItem title={faq.title} text={faq.text} num={idx} key={faq.title} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
