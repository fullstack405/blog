import React from 'react';
import { Link } from 'react-router-dom';
import './GridButton.css'; // 스타일링 파일

const GridButton = () => {
    // 버튼 및 이미지 정보 배열
    const buttons = [
        { name: 'Android', image: '/blog/android.png', path: '/android' },
        { name: 'Bootstrap', image: '/blog/bootstrap.png', path: '/bootstrap' },
        { name: 'CSS', image: '/blog/css.png', path: '/css' },
        { name: 'HTML', image: '/blog/html.png', path: '/html' },
        { name: 'Java', image: '/blog/java.png', path: '/java' },
        { name: 'JavaScript', image: '/blog/js.png', path: '/body/javascript' },
        { name: 'JSP', image: '/blog/jsp.png', path: '/jsp' },
        { name: 'React', image: '/blog/react.png', path: '/react' },
        { name: 'Spring', image: '/blog/spring.png', path: '/spring' },
        { name: 'Tomcat', image: '/blog/tomcat.webp', path: '/tomcat' },
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
