import Footer from "../Footer/Footer";
import DownloadButton from "../Footer/DownloadButton";

function AboutMe() {
  return (
    <>
        <h1>
            About Me
        </h1>
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <img 
                className = "object-center h-50 rounded-full shadow-xl shadow-blue-gray-900/50 border-8 border-double border-pink-600" 
                src={"assets/avatar.jpg?raw=true"}
                alt="Image Unable To Be Displayed"
            />
        </div>
        <h3>
            My Professional Experience
        </h3>
        <p>
            As a Data Engineering Senior Analyst at Accenture, I've expanded our capacity for real-time data processing,
            building ingestion frameworks that integrate with our team's analytical tools. My role capitalizes on my in-depth
            knowledge of SQL, Python, and Spark within Azure Databricks, ensuring our data pipelines are both efficient and robust.
            <br />
            <DownloadButton />
        </p>
        <h3>Education</h3>
        <p>
            I graduated from Texas State University with a BS Mathematics back in 2022.
            I decided to continue my education there, so I'm pursuing a MS Mathematics with a concentration in 
            Statistics at Texas State University and expect to graduate in May 2025!
        </p>
        <h3>Fun Facts</h3>
        <ul className="list-disc font-newsreader">
            <li>I was born and raised just outside of Houston, Texas</li>
            <li>I have a lovely (but sassy) senior cat named Poptart</li>
            <li>I am passionate about health, fitness, and longevity</li>
            <li>I love travelling! Last summer, I went overseas for the first time to Amsterdam and the UK and loved it. 
                Additionally, I also took my first ever solo trip and went to Chicago and stayed in a hostel, 
                which was very much out of my comfort zone but a very rewarding and fun experience! </li>
            <li>I have a cooking account on Instagram, feel free to connect with me on there! 
                <a href="https://www.instagram.com/bridgetbecookin?igsh=MTN3MWlnOWk4MGYxMQ==">@bridgetbecookin</a>
            </li>
        </ul>
        <Footer />
    </>
  );
};

export default AboutMe;