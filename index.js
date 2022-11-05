function sumOfAreas(squareSide, rectSideA, rectSideB, circleRadius, ellipseMajorAxis, ellipseMinorAxis) {
	const squareArea = squareSide ** 2;
	const areaOfARectangle = rectSideA * rectSideB;
	const areaOfACircle = Math.PI * (circleRadius ** 2);
	const ovalSquare = Math.PI * ellipseMajorAxis * ellipseMinorAxis;
	const areaOfAllFigures = squareArea + areaOfARectangle + areaOfACircle + ovalSquare;
	return areaOfAllFigures;
}

module.exports = sumOfAreas;