import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  width: 40%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  width: 60%;
  padding: 30px 20px;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #0077cc;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Project() {
  return (
    <Section>
      <Title>My Projects</Title>
      <ProjectGrid>

        <ProjectCard>
          <ProjectImage src="/assets/project1.jpg" alt="GuestBook Project" />
          <ProjectContent>
            <ProjectTitle>Portfolio(W.3)</ProjectTitle>
            <ProjectDescription>
              HTML과 CSS를 이용한 자기소개 웹사이트 만들기
            </ProjectDescription>
            <ProjectLink href="https://github.com/LikeLion-at-CAU-13th/Yugyeom-Kim/pull/2" target="_blank" rel="noopener noreferrer">
              GitHub 바로가기
            </ProjectLink>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard $reverse>
          <ProjectImage src="/assets/project2.jpg" alt="Rock-paper-scissors game" />
          <ProjectContent>
            <ProjectTitle>Rock-paper-scissors game(W.4)</ProjectTitle>
            <ProjectDescription>
              가위바위보 게임 만들기
            </ProjectDescription>
            <ProjectLink href="https://github.com/LikeLion-at-CAU-13th/Yugyeom-Kim/pull/3" target="_blank" rel="noopener noreferrer">
              프로젝트 보러가기
            </ProjectLink>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src="/assets/project3.jpg" alt="To-Do-List" />
          <ProjectContent>
            <ProjectTitle>To-Do-List(W.5)</ProjectTitle>
            <ProjectDescription>To-Do-List 만들기</ProjectDescription>
            <ProjectLink href="https://github.com/LikeLion-at-CAU-13th/Yugyeom-Kim/pull/4" target="_blank" rel="noopener noreferrer">
              사이트 보러가기
            </ProjectLink>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard $reverse>
          <ProjectImage src="/assets/project4.jpg" alt="Korea_Tourism_Photo_Gallery" />
          <ProjectContent>
            <ProjectTitle>Korea_Tourism_Photo_Gallery(W.6)</ProjectTitle>
            <ProjectDescription>한국관광공사 갤러리 만들기</ProjectDescription>
            <ProjectLink href="https://github.com/LikeLion-at-CAU-13th/Yugyeom-Kim/pull/5" target="_blank" rel="noopener noreferrer">
              사이트 보러가기
            </ProjectLink>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src="/assets/project5.jpg" alt="Toy-Project" />
          <ProjectContent>
            <ProjectTitle>Toy-Project(W.7)</ProjectTitle>
            <ProjectDescription>방명록 만들기</ProjectDescription>
            <ProjectLink href="https://github.com/LikeLion-at-CAU-13th/Yugyeom-Kim/pull/6" target="_blank" rel="noopener noreferrer">
              사이트 보러가기
            </ProjectLink>
          </ProjectContent>
        </ProjectCard>


      </ProjectGrid>
    </Section>
  );
}

export default Project;
