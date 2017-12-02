---
path: "/about"
date: "2017-08-10"
title: "Resume"
template: "resume"
---
['https://media.graphcms.com/k8oLYZxyR1ieU22tfZ9d']
      
      
      <section id='bio_wrapper'>
          <p 
            key={paragraph.id}>{paragraph.text}
            id='bio'
          >
          </p>
        <LogoWrapper>
            <a href={profile.profile_url}
              title={profile.title}
              target='_blank'
              rel='nofollow noreferrer noopener'
              key={profile.title}
            >
              <Logo src={profile.logo_url}
                alt={profile.title}
              />
            </a>
          <Link to='/resume'>
            <ResumeButton>Resume</ResumeButton>
          </Link>
        </LogoWrapper>
      </section id='text_wrapper'>
      <ProfileImage src={IMAGE_URL} alt='Profile image of Sean Lawrence' />