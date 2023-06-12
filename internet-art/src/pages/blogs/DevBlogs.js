import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const DevBlogs = () => {
	return (
		<div>
			<NavBar />
			<Header title="Dev Blogs" />

			<div className="blog-text-container">
				<h4>Week 3</h4>
				<div className="header-bars"></div>
				<p>
					The revision videos for this week were very informative, I love the
					extra detail that the lecturers, Lucky and Mike went into.
				</p>
				<p>
					Compared to last year’s JavaScript videos it felt like these were a
					lot more detailed which I appreciated. It felt as if the lecturers
					were passionate about the language and although I am not interested in
					coding languages as a medium, more interested in what can be done and
					the end results or applications we build with the languages, I found
					their passion quite infectious.
				</p>
				<p>
					I do wish we had more lectures in person of that sort targeted at
					technical programming skills, that would be enjoyable and would be a
					great space to ask questions and gain more insight into the specifics
					of languages.
				</p>
				<p>
					My current programming regime is focused on utility, that is I want to
					find the specific function or capability of a language that allows me
					to do the thing I want. Rather than gaining a broader and more in
					depth understanding of the language as a whole. From its origin, to
					what its developers intended for it to be used and the technical
					capabilities that make it useful and lends to particular kinds of
					tasks.{" "}
				</p>
				<p>
					I feel that leaning towards a broader understanding of the languages I
					use would make me an expert at those languages and understanding them
					and probably shave off the time I spend on stack overflow. I hope to
					align my regime towards this kind of learning.
				</p>
				<p>
					Because over my years as a programmer, I have coded in a long list of
					languages (python, C#, C++, C, Java, Javascript, Kotlin etc.) but I
					can’t truly say that I am an expert at a specific language, rather an
					expert at googling how to do a thing in any language. I would like to
					shift this.
				</p>

				<h4>Week 4</h4>
				<div className="header-bars"></div>
				<p>
					This week’s technical content was focused on internet APIs. Personally
					last year I managed to work with APIs and had a relatively simple time
					understanding how to use them, but this is probably aided by the fact
					that it was not my first time around the block with APIs. Having
					encountered them when I was doing my Computer Science courses.
				</p>
				<p>
					What I was lacking was the conceptual and theoretical understanding of
					what exactly an API is and why it is important. While I knew how to
					write code to access an API and how to read specific parts of API
					documentation to get the code I wanted to perform the functionality I
					wanted, I lacked the important conceptual understanding of what
					exactly I was doing with my code.
				</p>
				<p>
					It was helpful with this lectures getting to understand the
					fundamentals of what exactly an API is, why it is even used in the
					first place and it also helped gain an application for APIs. The
					wonder of someone else making a program that does a certain task and
					kindly sharing it with me using their API in a way that is safe
					secure, abstracted and easy to implement. That is such a gift.
				</p>

				<h4>Week 5</h4>
				<div className="header-bars"></div>
				<p>
					This week has really made me start to think about what exactly is art,
					and more specifically what makes something internet art. This has been
					prompted by our first reading
				</p>

				<a
					href="https://www.artsy.net/article/artsy-editorial-10-artistic-masterpieces-meant-experienced-online"
					className="blog-link"
				>
					Dean, A. (2019) ‘What Is “Internet Art”? Here Are 10 Masterpieces To
					Know’, Artsy, 24 January.
				</a>

				<p>
					The author speaks about why internet art has been left out of the rest
					of recent art history being that it is difficult for many to
					understand and even more difficult to categorise. And questions such
					as how to display it arise.
				</p>

				<p>
					And that prompted me to thought because my idea of what makes art, I
					believe that art is a social construct, it is not an abstract tangible
					thing that exists out in the physical world. Ad like any social
					construct it relies on the agreement of a group of humans to be valid.
					So for example, for money to work as an exchange system we all need to
					agree on its value and on its use. Similarly for art unfortunately the
					definition will have to be agreed upon by a group of people who will
					then view or interact with that artifact as art.
				</p>

				<p>
					Furthermore, because all art objects can be effectively not classified
					as art and be used for something else, a painting could be a great
					hand fan for your master, part of what makes art ‘art’ is our
					designation of it as separate from other things we have different
					practical use for.
				</p>
				<p>
					Which is why the first example of the internet art given in the
					reading of a vlog performance piece was mind boggling to me. Because
					the way we usually consume blogs is not under the context of art, but
					now that I am made aware of the fact that it is a performance and it
					is posted under art, my consumption and experience of the vlogs
					completely changed.
				</p>
				<p>
					Previously I would have just watched a vlog and thought oh a guy
					talking to a camera, cool. But now it is art, it speaks to the
					definition and boundaries of art itself and brings to question what
					sort of performances are considered art. For example a makeup
					influencer who puts a jovial and personality shifted performance of a
					character for the camera and fans would not necessarily be considered
					art, the media would just call them fake but should it in fact be art?
				</p>
				<p>
					This is what makes defining art so difficult, because it is by its
					very nature boundary shaking and convention breaking, and boundaries
					and convention are what we need to make definitions. We as humans
					often try to take things that aren’t considered art and make art out
					of them. Further complicating things.
				</p>

				<h4>Week 6</h4>
				<div className="header-bars"></div>

				<p>
					Another technical lecture from Lucky, the gift that keeps on giving.{" "}
				</p>
				<p>
					He really went into details about how exactly the internet works,
					while I knew about DNS lookups from past courses, it was only in this
					lecture that I realised that the server returns an HTML page. For some
					reason I had overlooked what was returned and just bundled it up as
					‘the server returns the website’. But going into depth about the fact
					that html is what is returned and how the browser goes through the DOM
					tree and then renders it using the layout instructions.
				</p>
				<p>
					Understanding this helps contextualise in my head why semantic markup
					is so important and why certain search engine optimization (SEO)
					tricks work the way they do. If it helps the browsers quickly figure
					out how to load and present the HTML DOM then it helps the page load
					faster. So in my head the importance of aria-labels, semantic elements
					and descriptive tags are important to help the actual browser itself.
				</p>

				<h4>Week 7</h4>
				<div className="header-bars"></div>

				<p>
					I appreciate that this week’s lecture on arrays was not only on
					arrays, but also on how to learn programming concepts from the
					internet documentation.
				</p>
				<p>
					I find that the more I get into programming, both at school and at
					work, the ability to traverse and read through the language or API
					documentation becomes more and more important. It is the difference, I
					believe, between average programming and excellent programming.
				</p>
				<p>
					Admittedly it is a skill that I need to hone in on and spend more time
					developing. I unfortunately have spent most of my career going the
					instant gratification route of looking for the quickest (shortest)
					tutorial or the code snippet on stack overflow and then just copying
					that code without understanding it. Getting gratification by instantly
					having the lines of code to run to make my project run but not taking
					the time to actually learn.
				</p>
				<p>
					But I would like to pivot from that as mentioned in an earlier dev
					blog, to actually having an in depth understanding of what I am
					coding, and what exactly the code is doing. This will give me more
					robust and clean code. Because perhaps the code snippet on the
					internet isn’t the best way for me to implement what I want to
					implement. It will able so make me an asset to other people who need
					help and who knows, maybe in a few years I will be one of those people
					with a star on stack overflow.
				</p>

				<h4>Week 8</h4>
				<div className="header-bars"></div>

				<p>
					This week’s lecture on Interaction Design was so informative, such a
					mindset shift. I had of course experience discussions around UX and UI
					but more so in the practical sense, but never gone through it using
					the academic theory of signs and symbols. This has broadened my
					understating of Interaction Design and given me a new way of tackling
					it.
				</p>
				<p>
					I especially love that Hanli broke down the steps to interaction
					design, and I see myself using this in future. I also see it as a
					helpful tool and framework for analysing UX/UI design.
				</p>
				<p>
					I also got a new way of finalising and cementing the human computer
					interaction model in mind, with system being the internal workings and
					the external view which must be represented to the actor, in this case
					our website user.
				</p>
				<p>
					Not sure how to explain but starting to view my work with these
					definitions in mind has given me a new way of conceptualising and
					understanding design. That I think will help me even with logging
					friction for my users and seeing where to reduce and how I can better
					present the system to the user to make the external view better
					communicate the internal view and possible actions that can be taken
					upon it.
				</p>

				<h4>Week 9</h4>
				<div className="header-bars"></div>

				<p>
					‘Programming is expressing computational thinking through the syntax
					of a programming language.’ Interesting.
				</p>
				<p>
					That really caught my attention because like Hanli says in her
					presentation this seems pretty obvious, but its implications are far
					reaching. And while it is quite obvious its not simple or easily
					known. For example, if you drop something it falls down is quite an
					obvious thing, but understanding how to calculate gravitational force
					and the impact that gravitational force has on our body’s aging
					process is a very different thing. I believe the same profundity
					applies to the definition of programming that Hanli out lays.
				</p>
				<p>
					It seems simply obvious at first, but the more one ponders on it, the
					more complex it reveals itself to be. And owing to this complexity
					there are many different aspects of programming interrogated by this
					aspect, but the one I want to focus on is clean code.
				</p>
				<p>
					In natural languages we have such a thing a good grammar, and even
					more specifically we have good written language. Which we spend years
					being taught in school and at university are judged quite harshly and
					critically on the robustness of our written language and ability to
					express thoughts.
				</p>
				<p>
					Given that programming languages are languages, naturally it follows
					that there is ‘good grammar’ that can be found in them. And I believe
					this good grammar is what we call clean code.
				</p>
				<p>
					I have been recently reading a book titled ‘Clean Code: A Handbook of
					Agile Software Craftsmanship’ by Robert C. Martin.
				</p>
				<p>
					The author does a lot in the first chapter of the book to convince the
					user about the importance of going beyond functionality and actually
					writing clean code. He lists cases where companies were brought down
					to their knees because the software product they built their business
					on, was built using badly written but functional code. And when it
					came time for expansion, the bad code was to great a foe to refactor.
				</p>
				<p>
					But what stood out to me in the first chapter was a quote he got from
					a Danish sweet wrapper that he opens the book with: “Honesty in small
					things is not a small thing.”
				</p>
				<p>
					This is deeply profound for life in general, but specifically in
					regards to programming, indenting correctly or following consistent
					naming conventions throughout the project might all seem like small
					things, but these are the building blocks for what will become a base
					for either good or bad code.
				</p>
				<p>
					And these small things will turn out to not be so small anymore once
					their consequences are that large. I would like to bring this level of
					attention to detail to my work and all my programming.
				</p>

				<h4>Week 10</h4>
				<div className="header-bars"></div>

				<p>
					Is code art? Is such an interesting questioning. Because obviously we
					can use code to make art, but the code itself being art is interesting
					to ponder upon.
				</p>
				<p>
					In my earlier blog I do mention that I believe the definition of art
					which is ever shifting moving, expanding and constricting.
				</p>
				<p>
					The speaker reads a poem wherein a young child speaks about how in
					school we’re not taught how to appreciate mathematics and then claims
					how the same applies to code. This is true, I have never been
					encountered with the view of wanting to feel and enjoy the code
					(except in this course of course).
				</p>
				<p>
					But I will be honest and say that I am not yet in the space to extend
					time and energy viewing code in that way. Because at the moment my
					goal is to firstly read more documentation and develop in depth
					knowledge about the things I code. And on the other hand, I want to
					get into the habit of writing robust clean code. So these two
					overarching goals might lead me to the appreciation of code as art,
					but I will not be pursuing the appreciation as an ends itself.
				</p>

				<h4>Week 11</h4>
				<div className="header-bars"></div>

				<p>
					For this dev blog I am going to expand on the crit I got for my first
					website in the website crit session we had in class.{" "}
				</p>
				<p>
					Iman said she enjoyed my internet art which is great, and there were
					things I could improve on. Such as making the website in its entirety
					speak to the idea of my internet art. And not just be an empty
					container for my art, but be part of the art itself.
				</p>
				<p>
					Which is what I aim to do for my exam and upcoming assignment. I aim
					to begin by really being intentional with my design before
					implementing the artwork, to have the website able to stand on its own
					as an art piece and then adding the internet artwork on top of it.
				</p>

				<h4>Week 12</h4>
				<div className="header-bars"></div>

				<p>
					This week was the most exciting for me! Because it speaks to exactly
					what my internet art is about, which is this idea of whether a machine
					can be an artist. So I was super excited to dive into the readings for
					the week, and I hope to get the opportunity to write more in depth in
					an essay format about this topic, hopefully in the exam.{" "}
				</p>

				<p>
					But the reading I want to zone in on is Can Machines Be Artists – A
					Deweyan Response in Theory and Practice by Arthur Still and Mark
					d’Inverno.
				</p>
				<p>
					The paper raises an important question before even beginning to
					attempt to answer the question of whether machines can be artists:
					what does it mean to be an artist?
				</p>
				<p>
					In all my contemplation over this idea of AI art I had never stopped
					myself to ask what it means to be an artist, I had gone on
					contemplating the ethics, the financial implications, the morality or
					AI art, but never whether this can even be considered to have been
					made by an artist (was the machine an artist?).
				</p>
				<p>
					The reason for this is that I had thought that what stood at the core
					of this debate of machine art was simply the similarity in what the
					machines and humans produced. But being an artist encapsulates much
					more than just the product created, and it can be easy to limit
					artists and to define them solely by their creations.
				</p>
				<p>
					But there is the lived experience of being an artist that is crucial
					not only to the identity of the artist, but to what the artists ends
					up creating, something of which a machine would not be capable of
					experiencing. Defining artists solely by product also assumes that the
					artistic products come out of a closed system, and that the lived
					experience is external to their entire process. But these assumptions
					are heavy and unjustified assumptions to be basing arguments on. They
					must first be interrogated.
				</p>
				<p>
					I wish to interrogate this idea further in my exam project as well
					writings and see how I can incorporate my thoughts from this
					interrogation into the art website itself.
				</p>

				<h4>Week 13</h4>
				<div className="header-bars"></div>

				<p>
					The masters research project by Mazwi Vezi titled ‘CHALLENGES FACING
					ARTISTS AND INSTITUTIONS WHEN SHOWCASING AND COLLECTING INTERNET ART:
					A COMPARATIVE STUDY RESEACH REPORT’ is what I will be blogging about
					this week. They describe the various challenges that affect internet
					art community but what stood out to me was about the difficulty of
					exhibiting internet artwork which is often process based. And I feel
					this resonated so well with me because in my website assignment that
					is precisely what I am trying to achieve.
				</p>
				<p>
					The shift from art object to process based as described by the author
					is quite interesting, since in my experience having to properly
					showcase an internet artwork also means that the website showcasing it
					must speak to the artwork and not just be an empty container for it in
					the same way that galleries can just be an empty room where you hang
					up paintings.
				</p>
				<p>
					So, this need for the website showcasing the art might mean that the
					website of galleries and curators will have to be changing constantly
					and that costs a lot of money and granted that most internet art does
					not ‘sell’ in the same way as traditional art, this becomes an expense
					that is difficult to justify. And then it adds to the difficulty of
					trying to find internet art since there aren’t a lot of curatorial
					spaces where one can go and find this art.
				</p>
			</div>

			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default DevBlogs;
