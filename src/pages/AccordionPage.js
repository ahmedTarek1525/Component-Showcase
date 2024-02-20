import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
           id: 'casadqwd',
           label: ' can i use React on a project ?',
           content: ' you can use React on any project you want.you can use React on any project you want.you can use React on any project you want. '
        },

        {
            id: 'dsadsadsa',
            label: ' can i use Javascript on a project ?',
            content: 'you can use Javascript on any project you want.you can use Javascript on any project you want.you can use Javascript on any project you want.'
        },

        {
            id: 'dsadasd',
            label: ' can i use CSS on a project ?',
            content: 'you can use CSS on any project you want.you can use CSS on any project you want.you can use CSS on any project you want.'
        }

    ]

    return <Accordion items={items} />;
}

export default AccordionPage;
