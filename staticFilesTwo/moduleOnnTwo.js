function stop(a, b, c, d, e, f, i, j) {
    let ia = a;
    let ib = b;
    let stopCordinate = c;
    let stopL = e;
    let stopR = f;
    let stopT = i;
    let stopB = j;
        (ia <= stopCordinate[0].borderR + 108 && ia >= stopCordinate[0].borderR - 10 && ib <= stopCordinate[0].borderT + 100 && ib >=stopCordinate[0].borderT - 18 ||
            ia <= stopCordinate[2].borderR + 100 && ia >= stopCordinate[2].borderR && ib <= stopCordinate[2].borderT + 100 && ib >=stopCordinate[2].borderT - 18 ||
            ia <= stopCordinate[1].borderR + 108 && ia >= stopCordinate[1].borderR - 10 && ib <= stopCordinate[1].borderT + 100 && ib >=stopCordinate[1].borderT - 18 ||
            ia <= stopCordinate[3].borderR + 108 && ia >= stopCordinate[3].borderR - 10 && ib <= stopCordinate[3].borderT + 100 && ib >=stopCordinate[3].borderT - 18 ||
            ia <= 0
            )? stopL = 1 : stopL = 0;

       (ia >= stopCordinate[0].borderR - 10 && ia <= stopCordinate[0].borderR + 100 && ib <= stopCordinate[0].borderT + 100 && ib >=stopCordinate[0].borderT - 18 ||
            ia >= stopCordinate[2].borderR - 20 && ia <= stopCordinate[2].borderR + 100 && ib <= stopCordinate[2].borderT + 100 && ib >=stopCordinate[2].borderT - 18 ||
            ia >= stopCordinate[1].borderR - 20 && ia <= stopCordinate[1].borderR + 100 && ib <= stopCordinate[1].borderT + 100 && ib >=stopCordinate[1].borderT - 18 ||
            ia >= stopCordinate[3].borderR - 20 && ia <= stopCordinate[3].borderR + 100 && ib <= stopCordinate[3].borderT + 100 && ib >=stopCordinate[3].borderT - 18 ||
            ia >= stopCordinate[5].borderR - 18
            )? stopR = 1  : stopR = 0;

            (ib <= 0 || ib <= stopCordinate[4].borderT) ? stopT = 1 : stopT = 0;
            
            (ib >= 3000 )? stopB = 1 : stopB = 0;
            return {
                stopL,
                stopR,
                stopT,
                stopB,
            }
    };


export default stop;