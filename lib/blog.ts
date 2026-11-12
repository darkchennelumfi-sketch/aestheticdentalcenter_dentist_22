export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
  takeaway: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-see-the-dentist",
    title: "How often should you see the dentist?",
    excerpt:
      "Six months is a familiar answer, but the right interval is personal. Here is how to think about a checkup schedule that fits your smile.",
    category: "Prevention",
    readTime: "4 min read",
    image: "/images/clean.jpg",
    imageAlt: "Dental instruments prepared for a routine cleaning",
    intro:
      "A routine dental visit is one of the quietest, most useful habits in your health care. It is also one of the easiest to postpone. The good news is that the right schedule is not a mystery — it is a decision you can make with your dentist based on your own mouth, history, and needs.",
    sections: [
      {
        heading: "The short answer: it depends on you",
        paragraphs: [
          "Many adults are seen every six months, and that rhythm works well for a lot of people. But it is not a universal rule. Your dentist may recommend a different interval based on your gum health, your history of decay, medications that affect dry mouth, smoking, pregnancy, or how consistently you care for your teeth at home.",
          "The goal is not to memorize a number. It is to catch small changes before they become expensive or uncomfortable ones — and to keep the conversation about your health going.",
        ],
      },
      {
        heading: "What a checkup actually covers",
        paragraphs: [
          "A good visit is more than a polishing. Your team reviews your health history, examines your teeth and gums, and looks for changes that are easier to treat early. Radiographs are taken when they are needed to see what the eye cannot, not simply on a fixed schedule.",
          "You should also leave with something useful: a clear understanding of what was found, what to watch, and what — if anything — comes next. If you are unsure why a recommendation is being made, ask. That is part of the appointment.",
        ],
        list: [
          "A review of your health history and any changes since your last visit",
          "An examination of your teeth, gums, bite, and soft tissues",
          "A professional cleaning tailored to your needs",
          "A conversation about home care and next steps",
        ],
      },
      {
        heading: "Signs not to wait for your next visit",
        paragraphs: [
          "Routine care is designed for the quiet in-between. When something changes, it deserves attention sooner rather than later. Bleeding gums, persistent sensitivity, pain when biting, a cracked tooth, or a new spot you can see or feel are all reasons to call.",
          "If you have facial swelling, trouble breathing or swallowing, uncontrolled bleeding, or significant trauma to a tooth, seek urgent medical or dental care right away. Do not wait for an online reply.",
        ],
      },
    ],
    takeaway:
      "Your best checkup schedule is the one built around your health — not a number on a calendar. Ask your dentist what interval makes sense for you, and keep the next visit on the books.",
  },
  {
    slug: "why-your-gums-matter",
    title: "Why your gums matter as much as your teeth",
    excerpt:
      "A healthy smile is not just about what you can see. The tissue beneath it does quiet, essential work — and it deserves the same attention.",
    category: "Gum health",
    readTime: "4 min read",
    image: "/images/exam.jpg",
    imageAlt: "Dentist completing a careful examination of a patient",
    intro:
      "When people think about dental health, they usually picture teeth. But the gums are the foundation the smile rests on. They support the bone around each tooth, protect the roots, and offer some of the earliest clues that something in the mouth needs attention.",
    sections: [
      {
        heading: "The foundation beneath the smile",
        paragraphs: [
          "Gum tissue is not a passive covering. It seals around each tooth, helps keep bacteria from reaching deeper structures, and responds quickly when plaque is left undisturbed. Early gum inflammation — gingivitis — is often reversible. When it progresses, the support around the tooth can be affected.",
          "That is why a cleaning is not only about polishing the visible surfaces. It is also a chance to check the health of the tissue and to make a plan before a small issue becomes a lasting one.",
        ],
      },
      {
        heading: "What bleeding gums can mean",
        paragraphs: [
          "Bleeding when you brush or floss is common, but it is not something to simply ignore. It can be a sign of inflammation caused by plaque at the gumline. It can also be influenced by hormones, medications, or systemic health conditions.",
          "The useful next step is an examination, not a guess. If your gums bleed regularly, feel tender, or have started to pull away from the teeth, bring it up at your next visit — or call sooner if you are concerned.",
        ],
        list: [
          "Gums that bleed during brushing or flossing",
          "Persistent bad breath or a metallic taste",
          "Red, swollen, or tender gums",
          "Gums that have started to recede",
          "Changes in how your teeth fit together",
        ],
      },
      {
        heading: "Small habits that support gum health",
        paragraphs: [
          "Consistency matters more than intensity. Brushing twice a day with a soft-bristled brush, cleaning between the teeth daily, and keeping routine dental appointments are the foundation. A balanced diet and avoiding tobacco also play a meaningful role.",
          "If your current routine is not working for you, say so. A technique that feels comfortable enough to repeat is more valuable than a perfect one you abandon after a week.",
        ],
      },
    ],
    takeaway:
      "Your gums are not a supporting detail — they are central to keeping your smile stable and comfortable. If something changes, treat it as useful information rather than a reason to wait.",
  },
  {
    slug: "understanding-sedation-dentistry",
    title: "A calmer first step: understanding sedation dentistry",
    excerpt:
      "Dental anxiety is common, and it does not need to be a permanent barrier to care. Here is how to think about comfort options and the conversation that comes first.",
    category: "Comfort",
    readTime: "4 min read",
    image: "/images/waiting.jpg",
    imageAlt: "A calm, light-filled dental waiting area",
    intro:
      "For some people, the hardest part of dental care happens before the appointment begins. The thought of the chair, the sounds, or the feeling of treatment can make even a routine visit feel overwhelming. Sedation dentistry exists for that experience — not to change the care you need, but to help you receive it more comfortably.",
    sections: [
      {
        heading: "What sedation dentistry is — and is not",
        paragraphs: [
          "Sedation dentistry describes a range of techniques used to help patients feel more relaxed during treatment. Depending on the approach, you may feel drowsy and less aware of the procedure. It is not the same as general anesthesia, and it is not a substitute for a careful examination or a clear treatment plan.",
          "Options vary in depth and in how they are delivered. The right choice depends on your health history, the treatment being planned, your level of anxiety, and the setting. That is why the conversation with your dentist comes before any decision.",
        ],
      },
      {
        heading: "Who it may help",
        paragraphs: [
          "Sedation can be considered for people with strong dental anxiety, a sensitive gag reflex, difficulty sitting still for longer appointments, or a history of uncomfortable dental experiences. It may also be discussed when a patient needs several treatments and would benefit from completing more in fewer visits.",
          "It is not automatically the right option for everyone. Some health conditions, medications, and pregnancy require extra caution. A thorough review of your medical history is part of the process — not a formality.",
        ],
      },
      {
        heading: "How the conversation works",
        paragraphs: [
          "A thoughtful consultation covers what makes visits difficult for you, what you would like the experience to feel like, and what safety considerations apply. You should understand the options, the expected effects, how long they last, and what you will need afterward — including whether you will need someone to drive you home.",
          "You are allowed to ask questions more than once. You are also allowed to change your mind. Comfort is not a one-size-fits-all setting, and a good plan leaves room for your input.",
        ],
        list: [
          "Tell your team what specifically feels difficult",
          "Share your full medication and health history",
          "Ask how each option will affect you during and after the visit",
          "Plan for transportation and recovery time if needed",
        ],
      },
    ],
    takeaway:
      "If dental anxiety has kept you away, start with a conversation rather than a commitment. A calm, well-informed plan is the first step toward care that feels manageable.",
  },
  {
    slug: "veneers-whitening-or-both",
    title: "Veneers, whitening, or both? Choosing with intention",
    excerpt:
      "Both can brighten a smile, but they solve different problems. A useful way to decide what your smile actually needs.",
    category: "Cosmetic",
    readTime: "5 min read",
    image: "/images/smile-detail.jpg",
    imageAlt: "Close-up of a bright, natural-looking smile",
    intro:
      "Cosmetic dentistry works best when it starts with a clear picture of the result you want — not with a treatment name you have heard. Whitening and veneers are both familiar options, but they are not interchangeable. Understanding the difference can help you have a more useful conversation at your consultation.",
    sections: [
      {
        heading: "Start with the result, not the treatment",
        paragraphs: [
          "Ask yourself what you would like to change. Is it the shade of your teeth? Their shape, length, or alignment? The overall balance of your smile? Maybe it is a single chipped tooth, or maybe it is a broader shift in how your smile feels in photos.",
          "Those answers point toward different approaches. A dentist can then look at your enamel, bite, gum health, and the proportions of your face before recommending a path.",
        ],
      },
      {
        heading: "Whitening: brightness without changing shape",
        paragraphs: [
          "Professional whitening focuses on the color of the natural teeth. It does not change their shape or close gaps, and it will not lighten crowns, veneers, or fillings the way it lightens enamel. It can be a good fit when the shape and structure of your teeth are already where you want them.",
          "Sensitivity is a common consideration, which is why a professional plan matters. Your starting shade, your goals, and your comfort all shape the recommendation.",
        ],
      },
      {
        heading: "Veneers: shape, color, and balance",
        paragraphs: [
          "Veneers are thin restorations bonded to the front of the teeth. They can refine color, contour, length, and the harmony of the smile. Because they involve altering the tooth surface, they are a more permanent decision than whitening.",
          "The best veneer work is not obvious. It considers how the teeth relate to the lips, the face, and the rest of the smile. That is why the design conversation — shade, shape, and proportion — is as important as the material itself.",
        ],
      },
      {
        heading: "Sometimes the answer is both",
        paragraphs: [
          "For some patients, whitening is the right first step, and veneers are not needed. For others, whitening the natural teeth first allows the final restorations to match a brighter shade. In more involved cases, a combination of treatments may be planned in a specific order.",
          "And sometimes the most honest recommendation is to do less. Not every smile needs a procedure. A healthy, well-maintained smile is already a good outcome.",
        ],
      },
    ],
    takeaway:
      "Bring your goals, not just a treatment name. A consultation that considers color, shape, enamel, and bite will lead to a recommendation you can feel confident about.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
