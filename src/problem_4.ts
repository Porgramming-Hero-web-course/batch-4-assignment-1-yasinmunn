
type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  function isCircle(shape: Circle | Rectangle): shape is Circle {
    return shape.shape === "circle";
  }
  
  function calculateShapeArea(shape: Circle | Rectangle): number {
    if (isCircle(shape)) {
      return Math.PI * Math.pow(shape.radius, 2);
    } else {
      return shape.width * shape.height;
    }
  }
  
  const circleArea = calculateShapeArea({ shape: "circle", radius: 10 });
  
  const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 5, height: 10 });

  