import React from 'react';
import { Link } from 'react-router-dom';
import './GridButton.css'; // 스타일링 파일

const GridButton = () => {
    // 버튼 및 이미지 정보 배열
    const buttons = [
        { name: 'Android', image: '/blog/android.png', path: '/body/android' },
        { name: 'Bootstrap', image: '/blog/bootstrap.png', path: '/body/bootstrap' },
        { name: 'CSS', image: '/blog/css.png', path: '/body/css' },
        { name: 'HTML', image: '/blog/html.png', path: '/body/html' },
        { name: 'Java', image: '/blog/java.png', path: '/body/java' },
        { name: 'JavaScript', image: '/blog/js.png', path: '/body/javascript' },
        { name: 'JSP', image: '/blog/jsp.png', path: '/body/jsp' },
        { name: 'React', image: '/blog/react.png', path: '/body/react' },
        { name: 'Spring', image: '/blog/spring.png', path: '/body/spring' },
        { name: 'Tomcat', image: '/blog/tomcat.webp', path: '/body/tomcat' },
    ];

    return (
        <div className="grid-container">
            {buttons.map((button, index) => (
                <Link to={button.path} key={index} className="grid-item">
                    <img src={button.image} alt={button.name} />
                    <div className="grid-label">{button.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default GridButton;
