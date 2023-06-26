import * as CalculateBmi from "../bmiCalculator";
const { calculateBmi } = jest.requireActual<typeof CalculateBmi>("../bmiCalculator");

describe("BMI Calculator", () => {
    // it("should return true", () => {
    //     expect(calculateBmi(1, 1)).toBe(2);
    // });

    // it("should return a bmi calculate as number", () => {
    //     expect(calculateBmi(180, 74)).toBe(22.84);
    // });

    it("bmiCalculator should be a function", () => {
        expect(typeof calculateBmi).toBe('function');
    })

    it("should return Normal range", () => {
        expect(calculateBmi(180, 74)).toBe("Normal range");
    });

    it("should return Underweight (Severe thinness)", () => {
        expect(calculateBmi(180, 30)).toBe("Underweight (Severe thinness)");
    });

    it("should return Underweight (Severe thinness)", () => {
        expect(calculateBmi(180, 52)).toBe("Underweight (Moderate thinness)");
    });

    it("should return Underweight (Severe thinness)", () => {
        expect(calculateBmi(180, 57)).toBe("Underweight (Mild thinness)");
    });

    it("should return Underweight (Severe thinness)", () => {
        expect(calculateBmi(180, 85)).toBe("Overweigh (Pre-obese)");
    });

    it("should return Underweight (Severe thinness)", () => {
        expect(calculateBmi(180, 100)).toBe("Obese (Class I)");
    });

    it("should return Underweight (Severe thinness)", () => {
        expect(calculateBmi(180, 120)).toBe("Obese (Class II)");
    });

    it("should return Underweight (Severe thinness)", () => {
        expect(calculateBmi(180, 130)).toBe("Obese (Class III)");
    });

});