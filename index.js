function sumOfAreas(squareSide, rectSideA, rectSideB, circleRadius, ellipseMajorAxis, ellipseMinorAxis) {
	return squareSide ** 2 + rectSideA * rectSideB + Math.PI * (circleRadius ** 2) + Math.PI * (ellipseMinorAxis * ellipseMajorAxis);
}

module.exports = sumOfAreas;