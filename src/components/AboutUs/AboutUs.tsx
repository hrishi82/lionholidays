import { Typography, Button } from "@mui/material";

import Box from "@mui/material/Box";

export const AboutUs = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        About us
      </Typography>

      <Box mb={10}>
        <Typography variant="h4" gutterBottom>
          ARSA History
        </Typography>
        <Typography variant="body1" gutterBottom textAlign={"justify"}>
          A meeting was organised by some licensed HAMs along with SWLs and
          Radio enthusi asts to form an Amateur Radio Society in Assam (India)
          on 25th December' 2005 at ICFAI National College, Guwahati-3 for the
          benefit of Disaster Management in Assam. The said meeting was attended
          by people from different walks of life including students who decided
          to name the society as "Amateur Radio Society of Assam (ARSA)". The
          meeting was presided by Mr. Ranjit Chaliha, VU2RCH and attended by
          HAMs such as Debajit Sarma, VU2DBM; Rudra Prasad Sarma, VU2PTF; Mrs.
          Bijaya Roychoudhury Chaliha, VU3BCH and other Short Wave Listeners and
          many more Radio Enthusiasts as well as reputed personals. The meeting
          dealt in depth the role of HAM Radios in times of Disasters such as
          earthquakes, floods, cyclones, tsunami etc. and urged the people in
          general to take up this noble and fulfilling scientific hobby.
        </Typography>
      </Box>

      <Box mb={10}>
        <Typography variant="h4" gutterBottom>
          What is Amateur Radio?
        </Typography>
        <Typography variant="body1" gutterBottom textAlign={"justify"}>
          Amateur radio, also known as ham radio, is an exciting and versatile
          hobby that revolves around wireless communication. It allows licensed
          operators to communicate with fellow enthusiasts from around the world
          using a wide range of radio frequencies. But amateur radio is much
          more than just talking over the airwaves—it is a dynamic and
          multifaceted endeavor that offers a plethora of opportunities and
          benefits.
          <Typography variant="body1" gutterBottom textAlign={"justify"}>
            At its core, amateur radio is all about exploration and
            experimentation. It allows individuals to set up their own radio
            stations, build antennas, and tinker with various equipment. This
            hands-on approach fosters a deep understanding of radio technology,
            electronics, and communication principles. It empowers operators to
            adapt to changing conditions, overcome challenges, and continuously
            improve their skills.{" "}
          </Typography>
          <Typography variant="body1" gutterBottom textAlign={"justify"}>
            Amateur radio operators come from diverse backgrounds and have
            varying interests. Some engage in emergency communication, providing
            a vital lifeline during times of crisis or natural disasters when
            traditional communication networks may be disrupted. Others enjoy
            DXing, which involves making long-distance contacts with fellow
            operators in different countries or continents. There are also those
            who take part in contests, testing their skills and efficiency in
            contacting as many stations as possible within a specified time
            frame.{" "}
          </Typography>
          <Typography variant="body1" gutterBottom textAlign={"justify"}>
            The beauty of amateur radio lies in its ability to bring people
            together. It forms a vibrant and global community of individuals
            passionate about communication, technology, and exploration.
            Operators can connect with fellow hams through local clubs, online
            forums, or on-air conversations. This camaraderie creates a
            supportive environment where knowledge is shared, mentorship
            thrives, and lifelong friendships are formed.{" "}
          </Typography>
          <Typography variant="body1" gutterBottom textAlign={"justify"}>
            One of the remarkable aspects of amateur radio is its dedication to
            public service. Operators often volunteer their skills and equipment
            for public events, community gatherings, and charitable causes. They
            provide communication support, ensuring the smooth flow of
            information and enhancing safety during public events or
            emergencies.
          </Typography>
          <Typography variant="body1" gutterBottom textAlign={"justify"}>
            {" "}
            To become an amateur radio operator, one must obtain an amateur
            radio license. Licensing requirements vary by country but typically
            involve passing an examination that tests knowledge of radio
            regulations, operating practices, and technical concepts. These
            examinations ensure that operators are competent and responsible in
            their use of the radio spectrum.{" "}
          </Typography>
          <Typography variant="body1" gutterBottom textAlign={"justify"}>
            Amateur radio offers a gateway to limitless exploration, learning,
            and connecting with like-minded individuals worldwide. It combines
            technology, communication, and a sense of adventure into an
            incredibly rewarding hobby. Whether you're interested in the
            technical aspects, community engagement, or simply enjoying the
            thrill of making contacts across the globe, amateur radio welcomes
            you to an incredible journey of discovery and connection.
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
