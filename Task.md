## Hero Section
**"500+ Community" is ambiguous.**  
What community? LinkedIn followers? Discord? Total people in all orgs? This reads as a vague filler metric to anyone who doesn't know you. If it refers to combined membership across IEEE, ACM, GDG, SMEC events — say that.  
→ drop it and replace with "7+ Leadership Roles"

**Three CTA buttons is two too many.**  
"View My Work" + "Download CV" + "Contact Me" in one row fragments attention. The primary action should be singular and confident.  
→ Recommended: "View My Work" (primary) + "Download CV" (ghost). Move "Contact Me" to nav CTA only.

**British nationality / international mobility not in hero.**  
This is your single biggest differentiator for international roles. British passport means you can work in the UK/EU without visa sponsorship. This belongs in the hero, not buried in the about section.  
→ Add a small badge or status line: "🇬🇧 British National · Open to Relocation"

**The quote isn't used.**  
Content.md has a genuinely memorable quote: *"I don't just build AI features. I build AI infrastructure that holds under real-world pressure, for real-world users, at real-world scale."*  
This should appear somewhere prominent — hero subtext, about section, or CTA section. It communicates depth.

---

### 2.2 About Section

**The lead "Building AI That Scales to Millions" is good but could be sharper.**  
It's passive. "I build AI that scales to millions" hits harder. Small change, different feel.

**"Because great technology is also about the people you bring along"** — this is a great line. Consider making it a visual pull-quote rather than burying it in a paragraph.

**About CTA "Read Full Story → #experience"** is confusing.  
The experience section isn't "the full story" — it's the timeline. change the CTA to "See My Experience."

---

### 2.3 Experience Section

**"Ongoing" for Freelance has no start date.**  
Recruiters and clients want to know when you started. It's at minimum a data gap.  
→ Add a start year: 2022

**No visual differentiation between role types.**  
Full-time, freelance lead, internship — they all look the same. A small badge like `[FT]`, `[Freelance]`, `[Internship]` or a color dot on the timeline node would help recruiters scan quickly.

---

### 2.4 Leadership Section

**7 cards in a 3-column grid = orphaned 7th card.**  
The last PAFLA card sits alone in the bottom row. This looks visually incomplete and draws attention to asymmetry. Either make it 6 cards (combine SMEC'25 + SMEC'24 into one "SMEC Leadership" card).

**Leadership section is not in the main nav.**  
Nav links: Home, About, Experience, Projects, Contact. Leadership is section #04 but unreachable from the navbar. Someone scanning from the nav misses it entirely.  
→ Add: `<a href="#leadership" class="nav-item"><span class="nav-num">04.</span>Leadership</a>` and renumber following items.

**"Building the tech community — one initiative at a time."**  
The subheading is generic. Something more specific sells the scale: "7 roles. 500+ engineers reached. One mission."

---

### 2.6 Tech Stack Section

**"Vector DBs" is too generic as a pill label.** Add Qdrant, Pinecone, Faiss.
add these skills:
Python, JS, HTML, CSS, BS, Laravel, MySQL, Mongo, SQL Server, Postgre, Qdrant, Pinecone, Faiss, LLM, GenAI, Agentic AI, Agents, Langchain, Langraph, N8N, Claude, OpenAI, Hugging Face, Django, OpenCV, FastAPI, Flask, React, Node, Express, Next, Typescript, docker, aws, cloud, devops, git, cicd, linux, data analytics, data science, data engineering, machine learning, artififical intelligence, deep learning, nlp, and etc make this more and more 

**The Flask icon `fas fa-flask` renders as a chemistry flask, not a Python Flask logo.** Font Awesome doesn't have a Flask (framework) icon. Use `fas fa-fire` or `fab fa-python` with a different label, or just accept the chemistry flask as an abstract logo.

---

### 2.9 Footer

**Footer nav only has 4 links** (Home, About, Experience, Projects). Missing: Leadership, Tech Stack, Contact. People who scroll to the footer should be able to navigate anywhere.

**Footer brand tagline is "Building AI that holds at scale."** Good. But consider adding the British national / availability signal here too for the opportunity-seeking angle.

---