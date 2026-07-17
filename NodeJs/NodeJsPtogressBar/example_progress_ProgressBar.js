const { default: chalk } = require('chalk'); // Вместо "{ default: chalk }" используем просто require
const ProgressBar = require('progress');

class pb {
  static async custom(
    ProccessText,
    TextAfterProccessEnd,
    TextToProccessStart,
    simvol = {
      complete: '/', // Задаем значения по умолчанию для символов
      incomplete: '-'
    },
    settings = {
      total: 100, // Задаем значения по умолчанию для настроек
      width: 40
    },
    tick, // tick предположительно это интервал, лучше назвать его interval
    options = {
      bar: true,      // Включено по умолчанию, если не указано иное
      total: true,
      current: true,
      elapsed: true,
      percent: true,
      eta: true,
      rate: true
    },
    style
  ) {
    var optionToBar = '';

    // Исправлена логика добавления ProccessText: он должен добавляться, если передан.
    // Также, чтобы формат был более корректным, текст лучше добавлять в начале.
    if (ProccessText) {
      optionToBar += `${ProccessText}:`;
    }

    // Проверка на наличие опций перед добавлением их в строку
    if (options.bar) {
      optionToBar += " [:bar]";
    }

    // Объединяем элементы формата для читаемости
    const formatParts = [];
    if (options.current && options.total) { // Проверяем оба флага
      formatParts.push(':current/:total');
    } else if (options.current) {
      formatParts.push(':current');
    } else if (options.total) {
      formatParts.push(':total');
    }

    if (options.percent) {
      formatParts.push(':percent');
    }

    const timeInfo = [];
    if (options.elapsed) {
      timeInfo.push('elapsed - :elapsed');
    }
    if (options.eta) {
      timeInfo.push('remaining - :eta');
    }
    if (options.rate) {
      timeInfo.push('rate - :rate');
    }
    if (timeInfo.length > 0) {
      // Добавляем информацию о времени, только если есть что показывать
      formatParts.push(`(${timeInfo.join(', ')})`);
    }

    optionToBar += ' ' + formatParts.join(' '); // Добавляем собранные части формата

    // Применение стилизации к строке формата
    let styledBarFormat = optionToBar;
    if (style === "dark") {
      styledBarFormat = chalk.gray(optionToBar);
    } else if (style === "green") {
      styledBarFormat = chalk.green(optionToBar);
    } else if (style === "yellow") {
      styledBarFormat = chalk.yellow(optionToBar);
    } else if (style === "red") {
      styledBarFormat = chalk.red(optionToBar);
    } else if (style === "blue") {
      styledBarFormat = chalk.blue(optionToBar);
    } else if (style === "orange") {
      styledBarFormat = chalk.rgb(255, 165, 0)(optionToBar);
    } else if (style === "italic") {
      styledBarFormat = chalk.italic(optionToBar);
    }

    // Обрабатываем startText (TextToProccessStart), если он передан
    if (TextToProccessStart) {
      console.log(TextToProccessStart);
    }

    var bar = new ProgressBar(styledBarFormat, {
      // Применяем chalk к символам, если они заданы, иначе используем значения по умолчанию
      complete: (simvol.complete || '/'), // Используем стиль или зеленый, если стиль не задан/неизвестен
      incomplete: (simvol.incomplete || '-'), // Незаполненный символ делаем серым
      width: settings.width,
      total: settings.total,
      clear: true // Автоматически очищает строку после завершения
    });

    // Исправлено: 'tick' используется для интервала. Переименуем переменную для ясности.
    const interval = typeof tick === 'number' ? tick : 100; // Если tick не число, используем 100ms

    var timer = setInterval(function () {
      bar.tick();
      if (bar.complete) {
        // Используем chalk для оформления сообщения о завершении
        console.log(`\n${chalk.bold.green(TextAfterProccessEnd)}\n`);
        clearInterval(timer);
      }
    }, interval);

    // Добавлен простой возврат объекта для возможности остановки, если потребуется
    return {
      stop: () => {
        clearInterval(timer);
        console.log(`\n${chalk.yellow("Process interrupted")}\n`);
      },
      complete: () => {
        bar.tick(bar.total - bar.curr); // Полностью заполняем бар
      }
    };
  }
}

module.exports.c = pb;

// Пример использования:
// pb.custom(
//   "Downloading", // ProccessText
//   "Download complete!", // TextAfterProccessEnd
//   "Starting download...", // TextToProccessStart
//   { complete: "█", incomplete: "░" }, // simvol
//   { total: 100, width: 30 }, // settings
//   100, // tick (интервал)
//   { // options
//     bar: true,
//     total: true,
//     percent: true,
//     eta: true,
//     rate: true
//   },
//   "orange" // style
// );
