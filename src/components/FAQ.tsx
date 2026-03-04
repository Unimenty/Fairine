
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Where is Fairine Enterprise located in Ghana?",
        answer: "Our main production and artisan workshop is located in Accra, Ghana. We prioritize local sourcing and handcrafted quality in every batch of our home care products.",
    },
    {
        question: "Do you offer home delivery for liquid soap and floor cleaners?",
        answer: "Yes, we offer affordable delivery services across Accra and other major cities in Ghana. You can place an order directly via WhatsApp or by calling our team for a delivery quote.",
    },
    {
        question: "Is Fairine liquid soap safe for sensitive skin?",
        answer: "Absolutely. We formulate our liquid soaps with skin-friendly ingredients and natural surfactants, making them safe for hands during household chores while remaining tough on grime.",
    },
    {
        question: "Can Fairine floor cleaner be used on all floor types?",
        answer: "Our floor cleaner is specially formulated to be safe for diverse Ghanaian flooring, including tiles, cement, and vinyl. It effectively disinfects while leaving a pleasant, long-lasting fragrance.",
    },
    {
        question: "How can I purchase Fairine products in bulk for a business?",
        answer: "We offer bulk pack sizes for all our products. For wholesale enquiries or large orders, please reach out to us directly through our Contact page or message us on WhatsApp for specialized rates.",
    },
];

const FAQ = () => {
    return (
        <section className="py-24 bg-card relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 translate-y-[-50%]"></div>
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1 rounded-full font-bold uppercase tracking-widest text-[10px]">
                        Home Care Expertise
                    </Badge>
                    <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-4 flex items-center justify-center gap-3">
                        Expert <span className="text-primary italic">Answers</span>
                    </h2>
                    <p className="text-muted-foreground font-medium text-lg">
                        Everything you need to know about caring for your home with Fairine.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-border/50 bg-background/50 backdrop-blur-sm rounded-[1.5rem] px-6 transition-all data-[state=open]:shadow-xl data-[state=open]:border-primary/20"
                        >
                            <AccordionTrigger className="text-left font-bold text-foreground py-6 hover:no-underline hover:text-primary transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 font-medium">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;
