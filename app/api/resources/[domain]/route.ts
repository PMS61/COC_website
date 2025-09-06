import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const resources = {
  "web": {
    "Frontend": [
      {
        "name": "CodeWithHarry Web Dev Playlist for HTML, CSS, JS",
        "description": "HTML+CSS+JS+Basic Backend",
        "tags": ["HTML", "CSS", "JS", "Basic Backend"],
        "link": "https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
      },
      {
        "name": "TailWind CSS CWH",
        "description": "Covers Tailwind in depth, must watch for CSS Haters",
        "tags": ["Tailwind CSS", "CSS"],
        "link": "https://www.youtube.com/playlist?list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O"
      },
      {
        "name": "Kevin Powell YT Channel for CSS",
        "description": "CSS God",
        "tags": ["CSS"],
        "link": "https://www.youtube.com/kepowob"
      },
      {
        "name": "CodingAddict JS Fundamentals",
        "description": "Detailed JS Course, highly recommended",
        "tags": ["JavaScript"],
        "link": "https://youtu.be/2Ji-clqUYnA"
      },
      {
        "name": "CodingAddict JS Projects",
        "description": "Corresponding Projects course for the above course",
        "tags": ["JavaScript", "Projects"],
        "link": "https://youtu.be/Kp3HGwlXwCk"
      },
      {
        "name": "CodingAddict ReactJS",
        "description": "Detailed ReactJS Course up to date, highly recommended",
        "tags": ["ReactJS"],
        "link": "https://youtu.be/iZhV0bILFb0"
      },
      {
        "name": "CodingAddict ReactJS Projects",
        "description": "Corresponding Projects course for the above course",
        "tags": ["ReactJS", "Projects"],
        "link": "https://youtu.be/ly3m6mv5qvg"
      },
      {
        "name": "React Net Ninja",
        "description": "A bit outdated but still gold",
        "tags": ["ReactJS"],
        "link": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
      },
      {
        "name": "Jack Herrington React Introduction",
        "description": "Not detailed but a solid intro",
        "tags": ["ReactJS"],
        "link": "https://youtube.com/playlist?list=PLNqp92_EXZBKa1U7JbgUwBnDk3XzYDvXe"
      },
      {
        "name": "CodeWithHarry React Playlist",
        "description": "Detailed ReactJS Course Desi Bhasha me",
        "tags": ["ReactJS", "Hindi"],
        "link": "https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
      },
      {
        "name": "NamasteJS",
        "description": "Amazing JS Course, a season 2.0 for this is in progress too",
        "tags": ["JavaScript"],
        "link": "https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP"
      },
      {
        "name": "Techgun YouTube Channel HTML, CSS, JS",
        "description": "Tutorial with conceptual explanation in Hindi",
        "tags": ["HTML", "CSS", "JavaScript", "Hindi"],
        "link": "https://youtube.com/playlist?list=PLjpp5kBQLNTSdLVVjU_kea8J8lP24ZseT"
      },
      {
        "name": "Next.js 13 & 14 Course",
        "link": "https://www.youtube.com/watch?v=843nec-IvW0",
        "description": "Learn Next.js App Router, Server Components, and more",
        "tags": ["Next.js", "React", "Full Stack"]
      }
    ],
    "Backend": [
      {
        "name": "CodeWithHarry Pug and NodeJS",
        "description": "Backend Part of CWH’s Webdev Playlist",
        "tags": ["NodeJS", "Pug", "CWH"],
        "link": "https://www.youtube.com/playlist?list=PLobAq7hWqZWGTfhj4jNQAVzJd_y6iTErQ"
      },
      {
        "name": "NodeJs Playlist By Thapa Technical",
        "description": "Includes Node, Express, Mongo & Auth Desi Bhasha me",
        "tags": ["NodeJS", "ExpressJS", "MongoDB", "Authentication", "Hindi"],
        "link": "https://www.youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8"
      },
      {
        "name": "CodingAddict NodeJS and ExpressJS",
        "description": "Detailed NodeJS Course, Highly recommended",
        "tags": ["NodeJS", "ExpressJS"],
        "link": "https://youtu.be/TNV0_7QRDwY"
      },
      {
        "name": "CodingAddict NodeJS Project with MongoDB",
        "description": "Corresponding Projects Course for the above course, covers an intro to MongoDB and Mongoose",
        "tags": ["NodeJS", "MongoDB", "Mongoose", "Projects"],
        "link": "https://youtu.be/jIsj0upCBAM"
      },
      {
        "name": "Corey Schafer Flask Playlist",
        "description": "The classic Flask course, might be a bit outdated but still relevant",
        "tags": ["Flask", "Python"],
        "link": "https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH"
      },
      {
        "name": "CodeWithHarry Flask Playlist",
        "description": "Exhaustive course for Flask",
        "tags": ["Flask", "Python", "CWH"],
        "link": "https://youtube.com/playlist?list=PLu0W_9lII9agAiWp6Y41ueUKx1VcTRxmf"
      },
      {
        "name": "Traversy Media 7 Hour Course",
        "description": "Prereqs: Python",
        "tags": ["Django", "Python"],
        "link": "https://youtu.be/PtQiiknWUcI"
      },
      {
        "name": "CodingEntrepreneus Django Playlist",
        "description": "Prereqs: Python. This course covers everything about Django",
        "tags": ["Django", "Python"],
        "link": "https://www.youtube.com/playlist?list=PLEsfXFp6DpzRMby_cSoWTFw8zaMdTEXgL"
      }
    ],
    "DevOps": [
      {
        "name": "Docker & Kubernetes",
        "link": "https://www.youtube.com/watch?v=Wf2eSG3owoA",
        "description": "Learn containerization and orchestration",
        "tags": ["Docker", "Kubernetes", "DevOps"]
      }
    ]
  },
  "appdev": {
    "Flutter": [
      {
        "name": "Flutter Tutorial by The Net Ninja",
        "link": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
        "description": "Basic Concepts + 2 Mini Projects",
        "tags": ["Flutter", "Beginner", "Projects"]
      },
      {
        "name": "Dart and Flutter Detailed Course by FreeCodeCamp and Vandad",
        "link": "https://youtu.be/VPvVD8t02U8",
        "description": "Includes literally everything A-Z up to date - even covers Firebase. Most recommended",
        "tags": ["Flutter", "Dart", "Comprehensive", "Firebase"]
      },
      {
        "name": "Codepur Flutter",
        "link": "https://www.youtube.com/watch?v=j-LOab_PzzU",
        "description": "Covers Basics of Flutter + 1 Project",
        "tags": ["Flutter", "Beginner", "Hindi"]
      }
    ],
    "React Native": [
      {
      "name": "React Native Tutorial",
      "type": "youtube",
      "link": "https://www.youtube.com/watch?v=0-S5a0eXPoc",
      "description": "Build mobile apps with React Native",
      "tags": ["React Native", "Mobile", "JavaScript"]
    }
    ],
    "Android": [
      {
        "name": "CodeWithHarry Appdev Basics in Java",
        "link": "https://youtu.be/mXjZQX3UzOs",
        "description": "Highly recommended for beginners",
        "tags": ["Android", "Java", "Beginner"]
      },
      {
        "name": "Philipp Lackner Kotlin Basics",
        "link": "https://youtube.com/playlist?list=PLQkwcJG4YTCRSQikwhtoApYs9ij_Hc5Z9",
        "description": "Philipp Lackner is THE GOD for Kotlin",
        "tags": ["Android", "Kotlin", "Beginner"]
      },
      {
        "name": "Philipp Lackner Android Fundamentals",
        "link": "https://youtube.com/playlist?list=PLQkwcJG4YTCTq1raTb5iMuxnEB06J1VHX",
        "description": "Covers core Android development concepts",
        "tags": ["Android", "Kotlin", "Fundamentals"]
      },
      {
        "name": "Kotlin Tutorial By Smartherd ( Basic Concepts )",
        "link": "https://www.youtube.com/playlist?list=PLlxmoA0rQ-LwgK1JsnMsakYNACYGa1cjR",
        "description": "Beginner-friendly Kotlin basics",
        "tags": ["Android", "Kotlin", "Beginner"]
      },
      {
        "name": "Android Basics in Kotlin course | Android Developers",
        "link": "https://developer.android.com/courses/android-basics-kotlin/course?authuser=2",
        "description": "Google’s Official Course",
        "tags": ["Android", "Kotlin", "Official"]
      },
      {
        "name": "Kotlin Basics By CheezyCode",
        "link": "https://youtube.com/playlist?list=PLRKyZvuMYSIMW3-rSOGCkPlO1z_IYJy3G",
        "description": "Hindi m h, extremely useful for kotlin beginners",
        "tags": ["Android", "Kotlin", "Hindi", "Beginner"]
      }
    ],
    "iOS": []
  },
  "dsa-cp": {},
  "blockchain": {},
  "ml": {},
};

export async function GET(
  request: NextRequest,
  { params }: { params: { domain: string } }
) {
  try {
    const domain = params.domain;
    const domainResources = resources[domain as keyof typeof resources] || [];

    return NextResponse.json(domainResources);
  } catch {
    return NextResponse.json(
      { error: "Failed to load domain resources" },
      { status: 500 }
    );
  }
}