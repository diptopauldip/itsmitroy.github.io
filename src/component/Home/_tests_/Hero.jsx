import React from "react";

const Hero = ({
  children,
  leftContent,
  rightContent,
  leftFlex,
  rightFlex,
  style,
}) => {
  const heroStyle = {
    display: "flex",
    justifyContent: "center",
    minHeight: "80vh",
    ...style,
  };

  const leftContainerStyle = {
    flex: leftFlex || 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const rightContainerStyle = {
    flex: rightFlex || 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
  };

  return (
    <div style={heroStyle}>
      {leftContent && (
        <div style={leftContainerStyle}>
          {React.cloneElement(leftContent, {
            style: leftContent.type === "img" ? imageStyle : null,
          })}
        </div>
      )}
      {rightContent && (
        <div style={rightContainerStyle}>
          {React.cloneElement(rightContent, {
            style: rightContent.type === "img" ? imageStyle : null,
          })}
        </div>
      )}
      {!leftContent && !rightContent && (
        <div style={{ textAlign: "center" }}>{children}</div>
      )}
    </div>
  );
};

export default Hero;

/*
Usage
*/
/*
<Hero>
        <h1>Welcome to our Website</h1>
        <p>Discover amazing things with us</p>
      </Hero>

      <Hero
        style={{ background: "lightblue", color: "white" }}
        leftContent={
          <div>
            <h2>Left Content</h2>
          </div>
        }
        rightContent={
          <img
            src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
            alt='Right Content'
          />
        }
      />

      <Hero
        style={{ background: "lightpink" }}
        leftContent={
          <img
            src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
            alt='Left Content'
          />
        }
        rightContent={
          <div>
            <h2>Right Content</h2>
          </div>
        }
        leftFlex={1.5}
        rightFlex={1}
      />
*/
