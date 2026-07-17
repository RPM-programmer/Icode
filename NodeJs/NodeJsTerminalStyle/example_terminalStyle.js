const {default : chalk} = require("chalk");

class Ts {
  static #red = 0;
  static #green = 0;
  static #blue = 0;
  static setCustomColor(red, green, blue) {
    if (
      !this.#isValidColorComponent(red) ||
      !this.#isValidColorComponent(green) ||
      !this.#isValidColorComponent(blue)
    ) {
      throw new Error("Color components must be between 0 and 255.");
    }
    this.#red = red;
    this.#green = green;
    this.#blue = blue;
  }
  static custom(text) {
    console.log(chalk.rgb(this.#red, this.#green, this.#blue)(text));
  }
  static #isValidColorComponent(component) {
    return typeof component === "number" && component >= 0 && component <= 255;
  }
  static Red(text) {
    console.log(chalk.red(text));
  }

  static Blue(text) {
    console.log(chalk.blue(text));
  }

  //reds
  static IndianRed(text) {
    console.log(chalk.rgb(205, 92, 92)(text));
  }
  static LightCoral(text) {
    console.log(chalk.rgb(240, 128, 128)(text));
  }
  static Salmon(text) {
    console.log(chalk.rgb(250, 128, 114)(text));
  }
  static DarkSalmon(text) {
    console.log(chalk.rgb(233, 150, 122)(text));
  }
  static LightSalmon(text) {
    console.log(chalk.rgb(255, 160, 122)(text));
  }
  static Crimson(text) {
    console.log(chalk.rgb(220, 20, 60)(text));
  }
  static FireBrick(text) {
    console.log(chalk.rgb(178, 34, 34)(text));
  }
  static DarkRed(text) {
    console.log(chalk.rgb(139, 0, 0)(text));
  }
  static Pink(text) {
    console.log(chalk.rgb(255, 192, 203)(text));
  }
  static LightPink(text) {
    console.log(chalk.rgb(255, 182, 193)(text));
  }
  static HotPink(text) {
    console.log(chalk.rgb(255, 105, 180)(text));
  }
  static DeepPink(text) {
    console.log(chalk.rgb(255, 20, 147)(text));
  }
  static MediumVioletRed(text) {
    console.log(chalk.rgb(199, 21, 133)(text));
  }
  static PaleVioletRed(text) {
    console.log(chalk.rgb(219, 112, 147)(text));
  }

  // oranges
  static LightSalmon(text) {
    console.log(chalk.rgb(255, 160, 122)(text));
  }
  static Coral(text) {
    console.log(chalk.rgb(255, 127, 80)(text));
  }
  static Tomato(text) {
    console.log(chalk.rgb(255, 99, 71)(text));
  }
  static OrangeRed(text) {
    console.log(chalk.rgb(255, 69, 0)(text));
  }
  static DarkOrange(text) {
    console.log(chalk.rgb(255, 140, 0)(text));
  }
  static Orange(text) {
    console.log(chalk.rgb(255, 165, 0)(text));
  }

  // yellows
  static Gold(text) {
    console.log(chalk.rgb(255, 215, 0)(text));
  }
  static Yellow(text) {
    console.log(chalk.rgb(255, 255, 0)(text));
  }
  static LightYellow(text) {
    console.log(chalk.rgb(255, 255, 224)(text));
  }
  static LemonChiffon(text) {
    console.log(chalk.rgb(255, 250, 205)(text));
  }
  static LightGoldenrodYellow(text) {
    console.log(chalk.rgb(250, 250, 210)(text));
  }
  static PapayaWhip(text) {
    console.log(chalk.rgb(255, 239, 213)(text));
  }
  static Moccasin(text) {
    console.log(chalk.rgb(255, 228, 181)(text));
  }
  static PeachPuff(text) {
    console.log(chalk.rgb(255, 218, 185)(text));
  }
  static PaleGoldenrod(text) {
    console.log(chalk.rgb(238, 232, 170)(text));
  }
  static Khaki(text) {
    console.log(chalk.rgb(240, 230, 140)(text));
  }
  static DarkKhaki(text) {
    console.log(chalk.rgb(189, 183, 107)(text));
  }

  // greens
  static GreenYellow(text) {
    console.log(chalk.rgb(173, 255, 47)(text));
  }
  static Chartreuse(text) {
    console.log(chalk.rgb(127, 255, 0)(text));
  }
  static LawnGreen(text) {
    console.log(chalk.rgb(124, 252, 0)(text));
  }
  static Lime(text) {
    console.log(chalk.rgb(0, 255, 0)(text));
  }
  static LimeGreen(text) {
    console.log(chalk.rgb(50, 205, 50)(text));
  }
  static PaleGreen(text) {
    console.log(chalk.rgb(152, 251, 152)(text));
  }
  static LightGreen(text) {
    console.log(chalk.rgb(144, 238, 144)(text));
  }
  static MediumSpringGreen(text) {
    console.log(chalk.rgb(0, 250, 154)(text));
  }
  static SpringGreen(text) {
    console.log(chalk.rgb(0, 255, 127)(text));
  }
  static SeaGreen(text) {
    console.log(chalk.rgb(46, 139, 87)(text));
  }
  static ForestGreen(text) {
    console.log(chalk.rgb(34, 139, 34)(text));
  }
  static Green(text) {
    console.log(chalk.rgb(0, 128, 0)(text));
  }
  static DarkGreen(text) {
    console.log(chalk.rgb(0, 100, 0)(text));
  }
  static YellowGreen(text) {
    console.log(chalk.rgb(154, 205, 50)(text));
  }
  static OliveDrab(text) {
    console.log(chalk.rgb(107, 142, 35)(text));
  }
  static Olive(text) {
    console.log(chalk.rgb(128, 128, 0)(text));
  }
  static DarkOliveGreen(text) {
    console.log(chalk.rgb(85, 107, 47)(text));
  }
  static MediumAquamarine(text) {
    console.log(chalk.rgb(102, 205, 170)(text));
  }
  static DarkSeaGreen(text) {
    console.log(chalk.rgb(143, 188, 143)(text));
  }
  static LightSeaGreen(text) {
    console.log(chalk.rgb(32, 178, 170)(text));
  }
  static DarkCyan(text) {
    console.log(chalk.rgb(0, 139, 139)(text));
  }
  static Teal(text) {
    console.log(chalk.rgb(0, 128, 128)(text));
  }

  // blues
  static Aqua(text) {
    console.log(chalk.rgb(0, 255, 255)(text));
  }
  static Cyan(text) {
    console.log(chalk.rgb(0, 255, 255)(text));
  }
  static LightCyan(text) {
    console.log(chalk.rgb(224, 255, 255)(text));
  }
  static PaleTurquoise(text) {
    console.log(chalk.rgb(175, 238, 238)(text));
  }
  static Aquamarine(text) {
    console.log(chalk.rgb(127, 255, 212)(text));
  }
  static Turquoise(text) {
    console.log(chalk.rgb(64, 224, 208)(text));
  }
  static MediumTurquoise(text) {
    console.log(chalk.rgb(72, 209, 204)(text));
  }
  static DarkTurquoise(text) {
    console.log(chalk.rgb(0, 206, 209)(text));
  }
  static CadetBlue(text) {
    console.log(chalk.rgb(95, 158, 160)(text));
  }
  static SteelBlue(text) {
    console.log(chalk.rgb(70, 130, 180)(text));
  }
  static LightSteelBlue(text) {
    console.log(chalk.rgb(176, 196, 222)(text));
  }
  static PowderBlue(text) {
    console.log(chalk.rgb(176, 224, 230)(text));
  }
  static LightBlue(text) {
    console.log(chalk.rgb(173, 216, 230)(text));
  }
  static SkyBlue(text) {
    console.log(chalk.rgb(135, 206, 235)(text));
  }
  static LightSkyBlue(text) {
    console.log(chalk.rgb(135, 206, 250)(text));
  }
  static DeepSkyBlue(text) {
    console.log(chalk.rgb(0, 191, 255)(text));
  }
  static DodgerBlue(text) {
    console.log(chalk.rgb(30, 144, 255)(text));
  }
  static CornflowerBlue(text) {
    console.log(chalk.rgb(100, 149, 237)(text));
  }
  static RoyalBlue(text) {
    console.log(chalk.rgb(65, 105, 225)(text));
  }
  static MediumBlue(text) {
    console.log(chalk.rgb(0, 0, 205)(text));
  }
  static DarkBlue(text) {
    console.log(chalk.rgb(0, 0, 139)(text));
  }
  static Navy(text) {
    console.log(chalk.rgb(0, 0, 128)(text));
  }
  static MidnightBlue(text) {
    console.log(chalk.rgb(25, 25, 112)(text));
  }

  // purples
  static Lavender(text) {
    console.log(chalk.rgb(230, 230, 250)(text));
  }
  static Thistle(text) {
    console.log(chalk.rgb(216, 191, 216)(text));
  }
  static Plum(text) {
    console.log(chalk.rgb(221, 160, 221)(text));
  }
  static Violet(text) {
    console.log(chalk.rgb(238, 130, 238)(text));
  }
  static Orchid(text) {
    console.log(chalk.rgb(218, 112, 214)(text));
  }
  static Fuchsia(text) {
    console.log(chalk.rgb(255, 0, 255)(text));
  }
  static Magenta(text) {
    console.log(chalk.rgb(255, 0, 255)(text));
  }
  static MediumOrchid(text) {
    console.log(chalk.rgb(186, 85, 211)(text));
  }
  static MediumPurple(text) {
    console.log(chalk.rgb(147, 112, 219)(text));
  }
  static Amethyst(text) {
    console.log(chalk.rgb(153, 102, 204)(text));
  }
  static BlueViolet(text) {
    console.log(chalk.rgb(138, 43, 226)(text));
  }
  static DarkViolet(text) {
    console.log(chalk.rgb(148, 0, 211)(text));
  }
  static DarkOrchid(text) {
    console.log(chalk.rgb(153, 50, 204)(text));
  }
  static DarkMagenta(text) {
    console.log(chalk.rgb(139, 0, 139)(text));
  }
  static Purple(text) {
    console.log(chalk.rgb(128, 0, 128)(text));
  }
  static Indigo(text) {
    console.log(chalk.rgb(75, 0, 130)(text));
  }
  static SlateBlue(text) {
    console.log(chalk.rgb(106, 90, 205)(text));
  }
  static DarkSlateBlue(text) {
    console.log(chalk.rgb(72, 61, 139)(text));
  }
  static MediumSlateBlue(text) {
    console.log(chalk.rgb(123, 104, 238)(text));
  }

  // brauns
  static Cornsilk(text) {
    console.log(chalk.rgb(255, 248, 220)(text));
  }
  static BlanchedAlmond(text) {
    console.log(chalk.rgb(255, 235, 205)(text));
  }
  static Bisque(text) {
    console.log(chalk.rgb(255, 228, 196)(text));
  }
  static NavajoWhite(text) {
    console.log(chalk.rgb(255, 222, 173)(text));
  }
  static Wheat(text) {
    console.log(chalk.rgb(245, 222, 179)(text));
  }
  static BurlyWood(text) {
    console.log(chalk.rgb(222, 184, 135)(text));
  }
  static Tan(text) {
    console.log(chalk.rgb(210, 180, 140)(text));
  }
  static RosyBrown(text) {
    console.log(chalk.rgb(188, 143, 143)(text));
  }
  static SandyBrown(text) {
    console.log(chalk.rgb(244, 164, 96)(text));
  }
  static Goldenrod(text) {
    console.log(chalk.rgb(218, 165, 32)(text));
  }
  static DarkGoldenrod(text) {
    console.log(chalk.rgb(184, 134, 11)(text));
  }
  static Peru(text) {
    console.log(chalk.rgb(205, 133, 63)(text));
  }
  static Chocolate(text) {
    console.log(chalk.rgb(210, 105, 30)(text));
  }
  static SaddleBrown(text) {
    console.log(chalk.rgb(139, 69, 19)(text));
  }
  static Sienna(text) {
    console.log(chalk.rgb(160, 82, 45)(text));
  }
  static Brown(text) {
    console.log(chalk.rgb(165, 42, 42)(text));
  }
  static Maroon(text) {
    console.log(chalk.rgb(128, 0, 0)(text));
  }

  // whites and blacks
  static White(text) {
    console.log(chalk.rgb(255, 255, 255)(text));
  }
  static Snow(text) {
    console.log(chalk.rgb(255, 250, 250)(text));
  }
  static Honeydew(text) {
    console.log(chalk.rgb(240, 255, 240)(text));
  }
  static MintCream(text) {
    console.log(chalk.rgb(245, 255, 250)(text));
  }
  static Azure(text) {
    console.log(chalk.rgb(240, 255, 255)(text));
  }
  static AliceBlue(text) {
    console.log(chalk.rgb(240, 248, 255)(text));
  }
  static GhostWhite(text) {
    console.log(chalk.rgb(248, 248, 255)(text));
  }
  static WhiteSmoke(text) {
    console.log(chalk.rgb(245, 245, 245)(text));
  }
  static Seashell(text) {
    console.log(chalk.rgb(255, 245, 238)(text));
  }
  static Beige(text) {
    console.log(chalk.rgb(245, 245, 220)(text));
  }
  static OldLace(text) {
    console.log(chalk.rgb(253, 245, 230)(text));
  }
  static FloralWhite(text) {
    console.log(chalk.rgb(255, 250, 240)(text));
  }
  static Ivory(text) {
    console.log(chalk.rgb(255, 255, 240)(text));
  }
  static AntiqueWhite(text) {
    console.log(chalk.rgb(250, 235, 215)(text));
  }
  static Linen(text) {
    console.log(chalk.rgb(250, 240, 230)(text));
  }
  static LavenderBlush(text) {
    console.log(chalk.rgb(255, 240, 245)(text));
  }
  static MistyRose(text) {
    console.log(chalk.rgb(255, 228, 225)(text));
  }
  static Gainsboro(text) {
    console.log(chalk.rgb(220, 220, 220)(text));
  }
  static LightGray(text) {
    console.log(chalk.rgb(211, 211, 211)(text));
  }
  static Silver(text) {
    console.log(chalk.rgb(192, 192, 192)(text));
  }
  static DarkGray(text) {
    console.log(chalk.rgb(169, 169, 169)(text));
  }
  static Gray(text) {
    console.log(chalk.rgb(128, 128, 128)(text));
  }
  static DimGray(text) {
    console.log(chalk.rgb(105, 105, 105)(text));
  }
  static LightSlateGray(text) {
    console.log(chalk.rgb(119, 136, 153)(text));
  }
  static SlateGray(text) {
    console.log(chalk.rgb(112, 128, 144)(text));
  }
  static DarkSlateGray(text) {
    console.log(chalk.rgb(47, 79, 79)(text));
  }
  static MidnightBlue(text) {
    console.log(chalk.rgb(25, 25, 112)(text));
  }
  static Black(text) {
    console.log(chalk.rgb(0, 0, 0)(text));
  }
}
module.exports.c = Ts;