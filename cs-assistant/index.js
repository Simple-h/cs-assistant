// ==UserScript==
// @name         CS助手 - 磨损与模板价格查询
// @namespace    https://github.com/your-github-username/cs-assistant
// @version      1.0.0.13
// @description  该脚本为CS:GO玩家提供磨损值价格查询与模板价格查询功能，帮助用户更方便地查看当前皮肤交易历史与同模板交易历史。
// @author       Jack Mr
// @match        *://www.youpin898.com/*
// @match        *://buff.163.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/524378/CS%E5%8A%A9%E6%89%8B%20-%20%E7%A3%A8%E6%8D%9F%E4%B8%8E%E6%A8%A1%E6%9D%BF%E4%BB%B7%E6%A0%BC%E6%9F%A5%E8%AF%A2.user.js
// @updateURL https://update.greasyfork.org/scripts/524378/CS%E5%8A%A9%E6%89%8B%20-%20%E7%A3%A8%E6%8D%9F%E4%B8%8E%E6%A8%A1%E6%9D%BF%E4%BB%B7%E6%A0%BC%E6%9F%A5%E8%AF%A2.meta.js
// ==/UserScript==
(function () {
    'use strict';
    let dataList = []; // 截取接口数据
    let urlFlag = '';
    // 获取当前页面的域名
    const hostname = window.location.hostname;
    // 根据不同的域名设置不同的标志
    if (hostname === 'www.youpin898.com') {
      urlFlag = 'yy';
    }
    if (hostname === 'buff.163.com') {
      urlFlag = 'buff';
    }
    console.log(urlFlag)
  
  
    const templatesCollectionT1 = {
      '爪子刀（★） | 多普勒p1': [1, 3, 4, 5, 7, 8, 9, 13, 14, 16, 20, 24, 27, 28, 31, 32, 42, 44, 45, 48, 49, 54, 58, 59, 60, 62, 66, 68, 71, 72, 75, 77, 88, 90, 96, 98, 102, 108, 110, 112, 113, 116, 121, 125, 126, 129, 134, 138, 142, 143, 146, 148, 149, 151, 152, 156, 160, 162, 164, 165, 166, 170, 171, 174, 177, 178, 182, 183, 184, 185, 188, 189, 190, 193, 194, 195, 196, 202, 203, 204, 206, 209, 213, 216, 217, 218, 220, 222, 230, 232, 233, 234, 235, 238, 241, 243, 246, 250, 252, 253, 254, 258, 259, 262, 266, 269, 274, 280, 281, 284, 287, 292, 296, 303, 304, 307, 309, 310, 311, 315, 321, 325, 328, 329, 332, 333, 334, 335, 337, 340, 344, 349, 351, 353, 354, 355, 356, 359, 364, 368, 369, 370, 372, 373, 374, 378, 384, 385, 387, 388, 393, 394, 397, 398, 400, 402, 404, 405, 406, 408, 409, 410, 411, 412, 413, 415, 419, 425, 432, 434, 436, 438, 441, 443, 444, 445, 448, 450, 451, 452, 454, 457, 459, 461, 463, 464, 471, 473, 477, 479, 480, 483, 485, 489, 492, 493, 496, 498, 499, 504, 506, 507, 515, 516, 522, 526, 529, 530, 531, 532, 535, 537, 539, 540, 541, 545, 546, 547, 552, 553, 555, 559, 560, 561, 569, 570, 574, 578, 579, 580, 582, 589, 590, 591, 593, 594, 598, 602, 605, 606, 607, 610, 611, 614, 616, 621, 624, 626, 627, 628, 630, 631, 632, 637, 642, 647, 649, 652, 653, 655, 656, 660, 663, 667, 670, 672, 673, 674, 678, 680, 683, 684, 685, 688, 689, 691, 693, 696, 699, 701, 702, 705, 706, 709, 710, 715, 716, 717, 723, 725, 727, 728, 730, 731, 732, 733, 736, 743, 744, 746, 750, 753, 756, 761, 764, 766, 767, 770, 773, 776, 777, 780, 783, 785, 787, 791, 792, 794, 795, 803, 805, 809, 810, 812, 817, 818, 820, 822, 826, 832, 839, 843, 844, 845, 846, 852, 853, 854, 858, 861, 865, 867, 868, 869, 873, 874, 876, 894, 899, 907, 908, 909, 918, 919, 922, 923, 929, 930, 931, 939, 941, 948, 949, 951, 958, 959, 962, 966, 969, 971, 972, 976, 977, 980, 982, 988, 989, 992, 994, 997, 998, 1000],
      '爪子刀（★） | 多普勒p2': [1, 3, 4, 7, 9, 13, 20, 24, 27, 28, 31, 42, 44, 45, 49, 54, 59, 60, 62, 66, 71, 72, 75, 77, 88, 90, 96, 98, 102, 110, 113, 116, 121, 125, 134, 138, 142, 143, 148, 151, 156, 160, 162, 164, 166, 170, 174, 177, 183, 184, 185, 189, 190, 193, 194, 195, 196, 203, 206, 209, 216, 217, 218, 220, 222, 232, 234, 235, 238, 246, 250, 253, 254, 258, 259, 262, 266, 269, 280, 284, 296, 303, 304, 307, 309, 310, 311, 315, 321, 325, 328, 329, 333, 334, 335, 349, 351, 353, 354, 355, 364, 368, 369, 370, 372, 373, 374, 384, 385, 387, 388, 394, 397, 398, 400, 402, 404, 408, 409, 410, 411, 413, 415, 419, 425, 432, 434, 436, 438, 441, 443, 445, 448, 450, 451, 459, 463, 464, 473, 477, 479, 480, 483, 485, 489, 492, 496, 498, 499, 504, 506, 507, 515, 526, 529, 530, 531, 532, 535, 537, 540, 545, 546, 547, 552, 553, 555, 559, 560, 561, 569, 570, 574, 579, 580, 582, 589, 590, 591, 593, 594, 598, 605, 606, 610, 611, 616, 624, 626, 627, 628, 630, 632, 642, 647, 655, 663, 667, 670, 672, 674, 678, 680, 684, 689, 691, 693, 699, 706, 709, 710, 715, 716, 717, 723, 725, 727, 730, 731, 733, 744, 746, 750, 753, 756, 764, 766, 767, 776, 783, 785, 791, 794, 805, 809, 810, 812, 817, 818, 820, 822, 839, 843, 844, 845, 846, 852, 853, 854, 858, 861, 865, 868, 869, 894, 899, 907, 909, 919, 929, 930, 931, 939, 941, 948, 951, 958, 962, 969, 972, 976, 977, 980, 989, 992, 997, 998],
      '爪子刀（★） | 多普勒p3': [11, 29, 34, 41, 46, 80, 84, 87, 93, 105, 107, 136, 137, 147, 150, 181, 201, 205, 210, 224, 229, 256, 278, 324, 326, 341, 345, 348, 358, 375, 395, 396, 399, 401, 403, 422, 428, 447, 449, 468, 482, 488, 494, 517, 520, 521, 550, 568, 571, 575, 576, 577, 583, 599, 601, 636, 639, 648, 657, 664, 668, 712, 714, 745, 747, 751, 754, 763, 781, 789, 793, 800, 807, 813, 824, 825, 827, 834, 848, 849, 856, 872, 887, 891, 892, 897, 910, 911, 914, 915, 925, 936, 940, 943, 944, 956, 961, 968, 975, 981],
      '爪子刀（★） | 多普勒p4': [11, 29, 34, 41, 46, 80, 84, 87, 93, 105, 107, 136, 137, 147, 150, 181, 201, 205, 210, 224, 229, 256, 278, 324, 326, 341, 345, 348, 358, 375, 395, 396, 399, 401, 403, 422, 428, 447, 449, 468, 482, 488, 494, 517, 520, 521, 550, 568, 571, 575, 576, 577, 583, 599, 601, 636, 639, 648, 657, 664, 668, 712, 714, 745, 747, 751, 754, 763, 781, 789, 793, 800, 807, 813, 824, 825, 827, 834, 848, 849, 856, 872, 887, 891, 892, 897, 910, 911, 914, 915, 925, 936, 943, 944, 956, 961, 968, 975, 981],
      '爪子刀（★） | 伽玛多普勒p1': [4, 7, 13, 20, 24, 31, 44, 49, 59, 66, 72, 75, 77, 88, 96, 98, 102, 113, 116, 134, 138, 142, 143, 151, 160, 162, 164, 166, 174, 184, 185, 189, 190, 193, 194, 209, 217, 218, 220, 235, 246, 250, 253, 258, 259, 262, 269, 284, 296, 303, 310, 311, 325, 334, 349, 353, 354, 355, 369, 373, 374, 384, 387, 388, 394, 398, 408, 409, 410, 419, 425, 432, 434, 436, 443, 450, 451, 464, 477, 479, 480, 492, 498, 504, 507, 526, 529, 530, 531, 532, 540, 552, 560, 570, 574, 579, 580, 594, 598, 610, 616, 627, 642, 667, 670, 678, 680, 684, 689, 693, 699, 709, 715, 716, 723, 730, 731, 733, 744, 750, 767, 776, 783, 812, 820, 839, 843, 845, 852, 853, 861, 865, 899, 907, 919, 929, 939, 951, 969, 992, 998],
      '爪子刀（★） | 伽玛多普勒p2': [1, 3, 4, 7, 9, 13, 20, 24, 27, 28, 31, 42, 44, 45, 49, 54, 59, 60, 62, 66, 71, 72, 75, 77, 88, 90, 96, 98, 102, 110, 113, 116, 121, 125, 134, 138, 142, 143, 148, 151, 156, 160, 162, 164, 166, 170, 174, 177, 183, 184, 185, 189, 190, 193, 194, 195, 196, 203, 206, 209, 216, 217, 218, 220, 222, 232, 234, 235, 238, 246, 250, 253, 254, 258, 259, 262, 266, 269, 280, 284, 296, 303, 304, 307, 309, 310, 311, 315, 321, 325, 328, 329, 333, 334, 335, 349, 351, 353, 354, 355, 364, 368, 369, 370, 372, 373, 374, 384, 385, 387, 388, 394, 397, 398, 400, 402, 404, 408, 409, 410, 411, 413, 415, 419, 425, 432, 434, 436, 438, 441, 443, 445, 448, 450, 451, 459, 463, 464, 473, 477, 479, 480, 483, 485, 489, 492, 496, 498, 499, 504, 506, 507, 515, 526, 529, 530, 531, 532, 535, 537, 540, 545, 546, 547, 552, 553, 555, 559, 560, 561, 569, 570, 574, 579, 580, 582, 589, 590, 591, 593, 594, 598, 605, 606, 610, 611, 616, 624, 626, 627, 628, 630, 632, 642, 647, 655, 663, 667, 670, 672, 674, 678, 680, 684, 689, 691, 693, 699, 706, 709, 710, 715, 716, 717, 723, 725, 727, 730, 731, 733, 744, 746, 750, 753, 756, 764, 766, 767, 776, 783, 785, 791, 794, 805, 809, 810, 812, 817, 818, 820, 822, 839, 843, 844, 845, 846, 852, 853, 854, 858, 861, 865, 868, 869, 894, 899, 907, 909, 919, 929, 930, 931, 939, 941, 948, 951, 958, 962, 969, 972, 976, 977, 980, 989, 992, 997, 998],
      '爪子刀（★） | 伽玛多普勒p3': [11, 29, 34, 41, 46, 80, 84, 87, 93, 105, 107, 136, 137, 147, 150, 181, 201, 205, 210, 224, 229, 256, 278, 324, 326, 341, 345, 348, 358, 375, 395, 396, 399, 401, 403, 422, 428, 447, 449, 468, 482, 488, 494, 517, 520, 521, 550, 568, 571, 575, 576, 577, 583, 599, 601, 636, 639, 648, 657, 664, 668, 712, 714, 745, 747, 751, 754, 763, 781, 789, 793, 800, 807, 813, 824, 825, 827, 834, 848, 849, 856, 872, 887, 891, 892, 897, 910, 911, 914, 915, 925, 936, 943, 944, 956, 961, 968, 975, 981],
      '爪子刀（★） | 伽玛多普勒p4': [11, 29, 34, 41, 46, 80, 84, 87, 93, 105, 107, 136, 137, 147, 150, 181, 201, 205, 210, 224, 229, 256, 278, 324, 326, 341, 345, 348, 358, 375, 395, 396, 399, 401, 403, 422, 428, 447, 449, 468, 482, 488, 494, 517, 520, 521, 550, 568, 571, 575, 576, 577, 583, 599, 601, 636, 639, 648, 657, 664, 668, 712, 714, 745, 747, 751, 754, 763, 781, 789, 793, 800, 807, 813, 824, 825, 827, 834, 848, 849, 856, 872, 887, 891, 892, 897, 910, 911, 914, 915, 925, 936, 943, 944, 956, 961, 968, 975, 981],
      '爪子刀（★） | 渐变大理石': [5, 8, 14, 16, 28, 32, 48, 58, 68, 108, 112, 121, 126, 129, 146, 149, 152, 156, 165, 171, 177, 178, 182, 188, 202, 204, 206, 213, 230, 233, 238, 241, 243, 252, 274, 281, 287, 292, 332, 337, 340, 344, 356, 359, 370, 372, 378, 393, 405, 406, 412, 444, 452, 454, 457, 461, 471, 493, 499, 516, 522, 539, 541, 545, 546, 553, 559, 578, 589, 591, 602, 607, 614, 621, 628, 631, 632, 637, 649, 652, 653, 655, 656, 660, 672, 673, 683, 685, 688, 696, 701, 702, 705, 706, 725, 728, 732, 736, 743, 761, 764, 766, 770, 773, 777, 780, 787, 791, 792, 795, 803, 817, 826, 832, 844, 854, 858, 867, 868, 873, 874, 876, 908, 918, 922, 923, 949, 959, 966, 971, 972, 977, 982, 988, 994, 997, 1000],
      '运动手套（★） | 大型猎物': [921, 203, 653, 817, 705, 11, 16, 112, 201, 267, 301, 345, 486, 614, 896, 18, 30, 34, 40, 59, 65, 69, 103, 93, 127, 139, 177, 197, 226, 230, 242, 254, 270, 355, 378, 382, 390, 459, 492, 507, 537, 541, 580, 609, 669, 738, 785, 798, 850, 872, 898, 902, 935],
      '运动手套（★） | 夜行衣': [2, 16, 18, 34, 44, 57, 63, 85, 93, 106, 115, 120, 123, 127, 130, 136, 141, 167176, 185, 195, 208, 231, 235, 240, 250, 262, 265, 267, 277, 279, 285, 291, 310, 318, 335, 343, 351, 364, 381, 382, 390, 402, 418, 424, 428, 431, 440, 450, 466, 473, 486, 488, 492, 507, 532, 537, 544, 546, 549, 554, 562, 595, 596, 598, 609, 612, 619, 623, 625, 627, 640, 647, 662, 663, 673, 689, 691, 693, 736, 755, 785, 799, 840, 848, 858, 866, 890, 894, 896, 898, 921, 935, 944, 945, 947, 957, 960, 967, 994],
      'AK-47 | 表面淬火': [661, 670, 321, 955, 179, 151, 168, 387, 555, 592, 617, 760, 809, 828, 11, 20, 30, 54, 73, 139, 194, 269, 332, 341, 375, 377, 398, 407, 418, 432, 463, 507, 522, 608, 615, 638, 664, 693, 773, 782, 793, 798, 838, 839, 891, 917, 919, 942, 965, 978, 4, 13, 74, 92, 103, 112, 126, 137, 147, 169, 178, 187, 189, 209, 228, 236, 242, 248, 278, 306, 310, 344, 349, 363, 389, 397, 403, 426, 428, 429, 430, 434, 442, 447, 450, 456, 468, 479, 494, 512, 526, 532, 557, 575, 577, 605, 622, 628, 632, 636, 640, 645, 648, 681, 685, 689, 690, 695, 698, 704, 708, 715, 721, 733, 750, 770, 775, 788, 791, 823, 842, 844, 849, 862, 868, 872, 878, 879, 887, 888, 905, 922, 927, 950, 961, 969, 985, 993, 996, 1000, 6, 10, 18, 19, 34, 56, 95, 108, 114, 156, 164, 199, 206, 208, 230, 255, 280, 285, 367, 379, 385, 393, 424, 441, 457, 458, 464, 475, 476, 489, 497, 501, 502, 505, 531, 537, 546, 553, 566, 573, 579, 583, 587, 593, 609, 618, 629, 633, 652, 668, 671, 699, 707, 716, 720, 741, 746, 780, 830, 858, 867, 869, 880, 882, 931, 932, 944, 959],
      'AK-47（StatTrak™） | 表面淬火': [661, 670, 321, 955, 179, 151, 168, 387, 555, 592, 617, 760, 809, 828, 11, 20, 30, 54, 73, 139, 194, 269, 332, 341, 375, 377, 398, 407, 418, 432, 463, 507, 522, 608, 615, 638, 664, 693, 773, 782, 793, 798, 838, 839, 891, 917, 919, 942, 965, 978, 4, 13, 74, 92, 103, 112, 126, 137, 147, 169, 178, 187, 189, 209, 228, 236, 242, 248, 278, 306, 310, 344, 349, 363, 389, 397, 403, 426, 428, 429, 430, 434, 442, 447, 450, 456, 468, 479, 494, 512, 526, 532, 557, 575, 577, 605, 622, 628, 632, 636, 640, 645, 648, 681, 685, 689, 690, 695, 698, 704, 708, 715, 721, 733, 750, 770, 775, 788, 791, 823, 842, 844, 849, 862, 868, 872, 878, 879, 887, 888, 905, 922, 927, 950, 961, 969, 985, 993, 996, 1000, 6, 10, 18, 19, 34, 56, 95, 108, 114, 156, 164, 199, 206, 208, 230, 255, 280, 285, 367, 379, 385, 393, 424, 441, 457, 458, 464, 475, 476, 489, 497, 501, 502, 505, 531, 537, 546, 553, 566, 573, 579, 583, 587, 593, 609, 618, 629, 633, 652, 668, 671, 699, 707, 716, 720, 741, 746, 780, 830, 858, 867, 869, 880, 882, 931, 932, 944, 959],
    };
    const templatesCollectionT2 = {    
      '爪子刀（★） | 多普勒p1': [],
      '爪子刀（★） | 多普勒p2': [5,8,14,15,16,17,32,35,39,48,55,58,68,70,74,83,86,92,99,100,101,106,108,112,119,120,122,123,124,126,127,128,129,131,132,133,135,140,144,146,149,152,153,158,159,165,169,171,178,180,182,186,188,197,198,199,202,204,208,213,219,221,225,226,230,231,233,237,239,241,242,243,244,245,247,248,252,261,263,264,265,268,274,275,279,281,286,287,288,290,292,305,306,316,317,320,330,331,332,337,338,339,340,344,350,352,356,359,360,362,366,371,378,383,386,391,393,405,406,407,412,417,418,420,423,426,444,452,454,456,457,460,461,467,469,471,472,474,476,478,484,490,493,495,497,500,501,502,503,505,509,510,516,519,522,523,524,534,539,541,542,544,548,551,557,558,562,563,565,578,581,585,595,600,602,603,607,609,614,615,618,620,621,622,623,625,631,634,637,638,643,646,649,650,652,653,656,659,660,669,671,673,675,679,681,682,683,685,688,692,694,696,701,702,704,705,708,711,713,720,721,728,732,736,739,743,748,755,761,768,770,771,772,773,775,777,779,780,784,787,788,792,795,796,803,816,826,832,836,855,857,859,862,867,871,873,874,876,882,883,890,893,896,908,913,918,922,923,926,927,928,935,937,938,945,949,952,954,959,965,966,971,973,982,983,985,986,987,988,994,999,1000],
      '爪子刀（★） | 多普勒p3': [6,12,18,21,22,30,33,37,43,64,73,76,79,89,94,103,104,109,111,117,130,141,145,154,155,157,161,168,172,173,176,179,187,191,211,212,223,227,236,249,260,273,276,277,282,283,285,289,293,295,299,302,308,312,313,314,323,336,357,361,376,377,380,381,382,389,392,416,421,424,429,430,433,435,440,442,446,455,458,462,465,466,481,486,487,491,508,511,512,513,514,518,525,527,528,536,538,549,556,564,566,572,573,584,586,587,588,592,596,597,604,608,612,633,640,645,651,654,658,661,665,666,686,687,690,697,698,703,719,726,737,740,742,749,752,757,758,759,760,762,769,774,782,790,798,802,804,806,808,811,815,821,835,838,840,851,860,863,864,866,875,878,881,884,886,895,898,901,902,916,917,921,933,942,953,955,960,974,978,979,984,990,991,993,995],
      '爪子刀（★） | 多普勒p4': [6,12,18,21,22,30,33,37,43,64,73,76,79,89,94,103,104,109,111,117,130,141,145,154,155,157,161,168,172,173,176,179,187,191,211,212,223,227,236,249,260,273,276,277,282,283,285,289,293,295,299,302,308,312,313,314,323,336,357,361,376,377,380,381,382,389,416,421,424,429,430,433,435,440,442,446,455,458,462,465,466,481,486,487,491,508,511,512,513,514,518,525,527,528,536,538,549,556,564,566,572,573,584,586,587,588,592,596,597,604,608,612,633,640,645,651,654,658,661,665,666,686,687,690,697,698,703,719,726,737,740,742,749,752,757,758,759,760,762,769,774,782,790,798,802,804,806,808,811,815,821,835,838,840,851,860,863,864,866,875,878,881,884,886,895,898,901,902,916,917,921,933,942,953,955,960,974,978,979,984,990,991,993,995],
      '爪子刀（★） | 伽玛多普勒p1': [1,3,5,8,9,14,16,27,28,32,42,45,48,54,58,60,62,68,71,90,108,110,112,121,125,126,129,146,148,149,152,156,165,170,171,177,178,182,183,188,195,196,202,203,204,206,213,216,222,230,232,233,234,238,241,243,252,254,266,274,280,281,287,292,304,307,309,315,321,328,329,332,333,335,337,340,344,351,356,359,364,368,370,372,378,385,393,397,400,402,404,405,406,411,412,413,415,438,441,444,445,448,452,454,457,459,461,463,471,473,483,485,489,493,496,499,506,515,516,522,535,537,539,541,545,546,547,553,555,559,561,569,578,582,589,590,591,593,602,605,606,607,611,614,621,624,626,628,630,631,632,637,647,649,652,653,655,656,660,663,672,673,674,683,685,688,691,696,701,702,705,706,710,717,725,727,728,732,736,743,746,753,756,761,764,766,770,773,777,780,785,787,791,792,794,795,803,805,809,810,817,818,822,826,832,844,846,854,858,867,868,869,873,874,876,894,908,909,918,922,923,930,931,941,948,949,958,959,962,966,971,972,976,977,980,982,988,989,994,997,1000],
      '爪子刀（★） | 伽玛多普勒p2': [5,8,14,15,16,17,32,35,39,48,55,58,68,70,74,83,86,92,99,100,101,106,108,112,119,120,122,123,124,126,127,128,129,131,132,133,135,140,144,146,149,152,153,158,159,165,169,171,178,180,182,186,188,197,198,199,202,204,208,213,219,221,225,226,230,231,233,237,239,241,242,243,244,245,247,248,252,261,263,264,265,268,274,275,279,281,286,287,288,290,292,305,306,316,317,320,330,331,332,337,338,339,340,344,350,352,356,359,360,362,366,371,378,383,386,391,393,405,406,407,412,417,418,420,423,426,444,452,454,456,457,460,461,467,469,471,472,474,476,478,484,490,493,495,497,500,501,502,503,505,509,510,516,519,522,523,524,534,539,541,542,544,548,551,557,558,562,563,565,578,581,585,595,600,602,603,607,609,614,615,618,620,621,622,623,625,631,634,637,638,643,646,649,650,652,653,656,659,660,669,671,673,675,679,681,682,683,685,688,692,694,696,701,702,704,705,708,711,713,720,721,728,732,736,739,743,748,755,761,768,770,771,772,773,775,777,779,780,784,787,788,792,795,796,803,816,826,832,836,855,857,859,862,867,871,873,874,876,882,883,890,893,896,908,913,918,922,923,926,927,928,935,937,938,945,949,952,954,959,965,966,971,973,982,983,985,986,987,988,994,999,1000],
      '爪子刀（★） | 伽玛多普勒p3': [6,12,18,21,22,30,33,37,43,64,73,76,79,89,94,103,104,109,111,117,130,141,145,154,155,157,161,168,172,173,176,179,187,191,211,212,223,227,236,249,260,273,276,277,282,283,285,289,293,295,299,302,308,312,313,314,323,336,357,361,376,377,380,381,382,389,416,421,424,429,430,433,435,440,442,446,455,458,462,465,466,481,486,487,491,508,511,512,513,514,518,525,527,528,536,538,549,556,564,566,572,573,584,586,587,588,592,596,597,604,608,612,633,640,645,651,654,658,661,665,666,686,687,690,697,698,703,719,726,737,740,742,749,752,757,758,759,760,762,769,774,782,790,798,802,804,806,808,811,815,821,835,838,840,851,860,863,864,866,875,878,881,884,886,895,898,901,902,916,917,921,933,942,953,955,960,974,978,979,984,990,991,993,995],
      '爪子刀（★） | 伽玛多普勒p4': [6,12,18,21,22,30,33,37,43,64,73,76,79,89,94,103,104,109,111,117,130,141,145,154,155,157,161,168,172,173,176,179,187,191,211,212,223,227,236,249,260,273,276,277,282,283,285,289,293,295,299,302,308,312,313,314,323,336,357,361,376,377,380,381,382,389,416,421,424,429,430,433,435,440,442,446,455,458,462,465,466,481,486,487,491,508,511,512,513,514,518,525,527,528,536,538,549,556,564,566,572,573,584,586,587,588,592,596,597,604,608,612,633,640,645,651,654,658,661,665,666,686,687,690,697,698,703,719,726,737,740,742,749,752,757,758,759,760,762,769,774,782,790,798,802,804,806,808,811,815,821,835,838,840,851,860,863,864,866,875,878,881,884,886,895,898,901,902,916,917,921,933,942,953,955,960,974,978,979,984,990,991,993,995],
      '爪子刀（★） | 渐变大理石': [],
      '运动手套（★） | 大型猎物': [],
      '运动手套（★） | 夜行衣': [],
      'AK-47 | 表面淬火': [],
      'AK-47（StatTrak™） | 表面淬火': [],
    };
    // 拦截 XMLHttpRequest 请求
    const originalXhrOpen = XMLHttpRequest.prototype.open;
  
    // 重写 XMLHttpRequest 的 open 方法
    XMLHttpRequest.prototype.open = function (method, url) {
      if (url.includes('queryOnSaleCommodityList')) {
        const originalOnreadystatechange = this.onreadystatechange;
  
        // 监听请求完成后的回调
        this.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            // 获取接口返回的数据
            const res = JSON.parse(this.responseText);
  
            // 存储接口数据，假设接口返回的数据结构适合存储
            if (res && res.Data) {
  
              res.Data.forEach(item => {
                let obj = {
                  wearValue: item.abrade.replace(/0+$/, '') || '', // 假设接口返回的数据有 wearValue 字段
                  paintseed: item.paintSeed || '', // 假设接口返回的数据有 wearValue 字段
                  template: item.dopplerName || '', // 假设接口返回的数据有 wearValue 字段
                  targetName: item.commodityName || '', // 假设接口返回的数据有 wearValue 字段
                }
                dataList.push(obj)
              });
            }
          }
          // 调用原始的 onreadystatechange 回调
          if (originalOnreadystatechange) {
            originalOnreadystatechange.apply(this, arguments);
          }
        };
      }
  
      // 调用原始的 open 方法
      originalXhrOpen.apply(this, arguments);
    };
    function showPopup(dataList, goodsName, type) {
      // 创建弹窗容器
      const popup = document.createElement('div');
      popup.style.position = 'fixed';
      popup.style.left = '50%';
      popup.style.top = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.padding = '20px';
      popup.style.paddingTop = '30px';
      popup.style.paddingBottom = '0';
      popup.style.backgroundColor = '#ffffff';
      popup.style.borderRadius = '10px';
      popup.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
      popup.style.zIndex = '9999';
      popup.style.maxWidth = '800px';
      popup.style.fontFamily = 'Arial, sans-serif';
      popup.style.border = '1px solid #e0e0e0';
      popup.style.transition = 'opacity 0.3s ease-in-out';
      popup.style.opacity = 0;
      popup.className = 'aaaaapopup'; // 添加类名aaaaapopup
  
      setTimeout(() => popup.style.opacity = 1, 10); // 为弹窗添加渐变出现效果
  
      // 创建内容容器并设置最大高度与隐藏滚动条
      const contentContainer = document.createElement('div');
      contentContainer.style.maxHeight = '500px';
      contentContainer.style.overflow = 'auto'; // 启用滚动
      contentContainer.style.marginBottom = '0'; // 去掉下边距
      contentContainer.style.padding = '10px';
      contentContainer.style.fontSize = '14px';
      contentContainer.style.lineHeight = '1.6';
      contentContainer.style.paddingRight = '0'; // 去掉右边内边距
  
      // 隐藏滚动条，但支持滚动
      contentContainer.style.scrollbarWidth = 'none'; // Firefox
      contentContainer.style.msOverflowStyle = 'none'; // IE 10+
  
      // 使用 Webkit 方式隐藏滚动条
      contentContainer.style.webkitOverflowScrolling = 'touch'; // 平滑滚动效果
      const style = document.createElement('style');
      style.innerHTML = `
    /* Webkit 浏览器 */
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .hide-scrollbar {
        -ms-overflow-style: none;  /* IE 10+ */
        scrollbar-width: none;  /* Firefox */
    }
  `;
      document.head.appendChild(style);
      contentContainer.classList.add('hide-scrollbar'); // 添加样式类以隐藏滚动条
  
      // 弹窗内容
      let content = `<h3 style="text-align:center; color:#333; font-size: 18px; font-weight: 600; margin-bottom: 15px;">${type === '1' ? '磨损' : '模板'}价格查询</h3>`;
  
      // 遍历数据列表并生成内容
      dataList.forEach((data, index) => {
        const isLastItem = index === dataList.length - 1;
        content += `
    <div style="${isLastItem ? '' : 'border-bottom: 1px solid #ddd;'} padding-bottom: 15px;">
        <p><strong>名称:</strong> ${goodsName}</p>
        <p style="color:red"><strong>图案模板:</strong> ${data.paintSeed ? data.paintSeed : ''}</p>
        <p><strong>磨损:</strong> ${data.wearFlot}</p>
        <p><strong>印花:</strong> ${data.stickers.length > 0 ? data.stickers.join(', ') : '无'}</p>
        <p style="color:red"><strong>成交价格:</strong> ¥${data.tradePrice}</p>
        <p><strong>成交时在售底价:</strong> ¥${data.minSellPrice}</p>
        <p><strong>成交时间:</strong> ${new Date(data.tradeTime * 1000).toLocaleString()}</p>
    </div>
  `;
      });
  
      // 将内容添加到内容容器中
      contentContainer.innerHTML = content;
  
      // 创建关闭文本
      const closeText = document.createElement('span');
      closeText.innerText = '关闭';
      closeText.style.position = 'absolute';
      closeText.style.top = '10px';
      closeText.style.right = '10px';
      closeText.style.color = '#FF4D4F';
      closeText.style.fontSize = '16px';
      closeText.style.cursor = 'pointer';
      closeText.style.fontWeight = '600';
      closeText.style.transition = 'color 0.3s';
  
      closeText.addEventListener('mouseenter', () => {
        closeText.style.color = '#e30000';
      });
  
      closeText.addEventListener('mouseleave', () => {
        closeText.style.color = '#FF4D4F';
      });
  
      closeText.addEventListener('click', () => {
        popup.style.opacity = 0;
        setTimeout(() => {
          document.body.removeChild(popup);
        }, 300);
      });
  
      // 将关闭文本和内容容器添加到弹窗
      popup.appendChild(contentContainer);
      popup.appendChild(closeText);
  
      // 添加到页面
      document.body.appendChild(popup);
    }
    // 发送请求的函数
    function sendRequest(wearValue, paintseed, template, type, targetName) {
      // 第一个接口的URL
      const firstApiUrl = 'https://sdt-api.ok-skins.com/user/skin/v2/skin-info?content=' + wearValue + '&timestamp=' + new Date().getTime();
  
      // 请求第一个接口
      fetch(firstApiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-App-Version': '1.0.0',
          'X-Currency': 'CNY',
          'X-Device': '1',
          'X-Device-Id': '6ff4f894-4c0a-49a4-935c-2303c4185ecb',
          'Language': 'zh_CN',
          'Origin': 'https://steamdt.com',
          'Referer': 'https://steamdt.com/',
        }
      })
        .then(response => response.json()) // 解析第一个接口的响应
        .then(firstApiData => {
  
          // 遍历第一个接口返回的数组，寻找匹配的名称
          const matchedItem = firstApiData?.data?.find(item => item.assetDetail?.classInfo?.name === targetName);
  
          if (matchedItem) {
            const itemId = matchedItem.assetDetail.classInfo.itemId; // 获取 itemId
            const goodsName = matchedItem.assetDetail.classInfo.name; // 获取 goodsName
  
            // 第二个接口的URL
            const secondApiUrl = 'https://sdt-api.ok-skins.com/item/trade/v1/list?timestamp=' + new Date().getTime();
  
            const headers = {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-App-Version': '1.0.0',
              'X-Currency': 'CNY',
              'X-Device': '1',
              'X-Device-Id': '6ff4f894-4c0a-49a4-935c-2303c4185ecb',
              'Language': 'zh_CN',
              'Origin': 'https://steamdt.com',
              'Referer': 'https://steamdt.com/',
            };
  
            const requestData = {
              paintSeed: paintseed ? [paintseed] : [], // 传入 paintseed 数据
              specialStyles: template ? [template] : [], // 传入 template 数据
              style: template ? [template] : [], // 传入 style 数据
              wear: type === '1' ? wearValue : '', // 磨损字段
              pageSize: 20,
              itemId: itemId,
              sortBy: "tradeTime",
              sortType: "desc",
              styles: "",
              paintIndex: [], // 根据需求调整
              timestamp: new Date().getTime().toString(), // 使用当前时间戳
            };
  
            // 使用 fetch 发送 POST 请求
            fetch(secondApiUrl, {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(requestData),
            })
              .then(response => response.json())
              .then(data => {
                if (data && data.data.list.length > 0) {
                  showPopup(data.data.list, goodsName, type); // 使用返回的数据更新弹窗
                }
              })
              .catch(error => {
                console.error('第二个接口请求失败:', error);
              });
          } else {
            console.error('没有找到匹配的物品名：', targetName);
          }
        })
        .catch(error => {
          console.error('第一个接口请求失败:', error);
        });
    }
    // 为每个 tr 元素添加查看历史价格和按模板查询价格按钮
    function addHistoryButtonToRows() {
      if (urlFlag === 'yy') {
        if (dataList.length <= 0) return;
        const rows = document.querySelectorAll('tr.ant-table-row');
  
        rows.forEach((row) => {
  
          // 检查当前行是否包含磨损值
          const wearValueDiv = row.querySelector('.wear-degree-num___AbgA1 span');
          const wearText = wearValueDiv.textContent.trim();
          const wearMatch = wearText.match(/磨损：\s*(\d+\.\d+)/);
          let wearValue = ''; // 磨损值
          if (wearMatch) {
            wearValue = wearMatch[1];
          }
  
          // dataList的磨损值匹配wearValue
          const matchedData = dataList.find(item => item.wearValue === wearValue);
          if (matchedData) {
            // 获取doppler名称
            let template = matchedData.template || '';
            let paintseed = matchedData.paintseed || '';
            let targetName = matchedData.targetName || '';
            let topTemplate = '';
  
            template = targetName.includes('多普勒') ? template.toLowerCase() || '' : '';
            topTemplate = targetName.replace(/\s*\(.*?\)/g, '').trim() + template;
  
  
            // 添加查看历史价格按钮
            const historyButton = document.createElement('button');
            historyButton.innerText = '查看历史价格';
            historyButton.className = 'view-history-btn';
            historyButton.style.cursor = 'pointer';
            historyButton.style.marginBottom = '6px';
            historyButton.style.padding = '8px 15px';
            historyButton.style.backgroundColor = '#3c8f7e';
            historyButton.style.border = 'none';
            historyButton.style.color = '#fff';
            historyButton.style.borderRadius = '4px';
            historyButton.style.fontSize = '14px';
            historyButton.style.transition = 'background-color 0.3s';
            historyButton.style.width = '130px';
  
            // 悬浮效果
            historyButton.addEventListener('mouseenter', () => {
              historyButton.style.backgroundColor = '#2d6a5d';
            });
            historyButton.addEventListener('mouseleave', () => {
              historyButton.style.backgroundColor = '#3c8f7e';
            });
  
            // 添加查看历史价格按钮点击事件
            historyButton.addEventListener('click', function () {
              const existingPopups = document.querySelectorAll('.aaaaapopup');
              existingPopups.forEach(popup => popup.remove());
  
              // 调用请求函数
              sendRequest(wearValue, '', '', '1', targetName); // 传入磨损值和paintseed
            });
  
            // 添加按模板查询价格按钮
            const templateButton = document.createElement('button');
            templateButton.innerText = '按模板查询价格';
            templateButton.className = 'view-template-btn';
            templateButton.style.cursor = 'pointer';
            templateButton.style.padding = '8px 15px';
            templateButton.style.backgroundColor = '#4c97f0';
            templateButton.style.border = 'none';
            templateButton.style.color = '#fff';
            templateButton.style.borderRadius = '4px';
            templateButton.style.fontSize = '14px';
            templateButton.style.transition = 'background-color 0.3s';
            templateButton.style.width = '130px';
  
            // 悬浮效果
            templateButton.addEventListener('mouseenter', () => {
              templateButton.style.backgroundColor = '#3873b2';
            });
            templateButton.addEventListener('mouseleave', () => {
              templateButton.style.backgroundColor = '#4c97f0';
            });
  
            templateButton.addEventListener('click', function () {
              const existingPopups = document.querySelectorAll('.aaaaapopup');
              existingPopups.forEach(popup => popup.remove());
  
              // 调用请求函数
              sendRequest(wearValue, paintseed, template, '2', targetName); // 传入磨损值和paintseed
            });
            // 创建显示T1/T2的div
            const templateLabel = document.createElement('div');
            templateLabel.style.marginTop = '5px';
            templateLabel.style.fontSize = '20px';
            templateLabel.style.fontWeight = '700';
            templateLabel.style.backgroundColor = '#fff';
            templateLabel.style.color = '#333';
            templateLabel.style.fontStyle = 'italic';
            templateLabel.style.textAlign = 'center';
            templateLabel.style.padding = '5px';
            // 根据模板和paintseed判断是否需要变更背景颜色
            if (templatesCollectionT1[topTemplate] && templatesCollectionT1[topTemplate].includes(Number(paintseed))) {
              row.style.backgroundColor = 'yellow'; // 满足条件则背景变为黄色
              templateLabel.innerText = 'T1'; // 显示T1
            } else if (templatesCollectionT2[topTemplate] && templatesCollectionT2[topTemplate].includes(Number(paintseed))) {
              templateLabel.style.backgroundColor = '#lightblue';
              // row.style.backgroundColor = 'lightblue'; // 满足条件则背景变为蓝色
              templateLabel.innerText = 'T2'; // 显示T2
            } else {
              row.style.backgroundColor = ''; // 不满足条件则恢复默认背景
            }
  
            // 获取行内的一个 td 元素，假设是最后一个 td
            const lastTd = row.querySelector('td:last-child');
            if (lastTd) {
              lastTd.appendChild(historyButton);
              lastTd.appendChild(templateButton);
              lastTd.appendChild(templateLabel); // 添加显示T1/T2的div
            }
  
            dataList = dataList.filter(item => item.wearValue !== wearValue);
          }
  
        });
      }
  
      if (urlFlag === 'buff') {
        const rows = document.querySelectorAll('tr');
  
        rows.forEach(row => {
          // 检查当前行是否包含磨损值
          const wearValueDiv = row.querySelector('.wear-value');
          if (wearValueDiv && !row.querySelector('.view-history-btn') && !row.querySelector('.view-template-btn')) {
            // 添加查看历史价格按钮
            const historyButton = document.createElement('button');
            historyButton.innerText = '查看历史价格';
            historyButton.className = 'view-history-btn';
            historyButton.style.margin = '15px';
            historyButton.style.cursor = 'pointer';
            historyButton.style.padding = '8px 15px';
            historyButton.style.backgroundColor = '#3c8f7e';
            historyButton.style.border = 'none';
            historyButton.style.color = '#fff';
            historyButton.style.borderRadius = '4px';
            historyButton.style.fontSize = '14px';
            historyButton.style.transition = 'background-color 0.3s';
  
            // 悬浮效果
            historyButton.addEventListener('mouseenter', () => {
              historyButton.style.backgroundColor = '#2d6a5d';
            });
            historyButton.addEventListener('mouseleave', () => {
              historyButton.style.backgroundColor = '#3c8f7e';
            });
            // 获取paintseed值
            const assetInfo = JSON.parse(row.getAttribute('data-asset-info'));
            const goodsInfo = JSON.parse(row.getAttribute('data-goods-info'));
  
            let paintseed = '';
            let template = '';
            let targetName = '';
            let wearValue = null;
            let topTemplate = '';
  
            // 获取磨损值
            const wearText = wearValueDiv.textContent.trim();
            const wearMatch = wearText.match(/磨损:\s*(\d+\.\d+)/);
            if (wearMatch) {
              wearValue = wearMatch[1];
            }
            if (goodsInfo) {
              targetName = goodsInfo.name || '';
            }
            if (assetInfo) {
              paintseed = assetInfo?.info?.paintseed;
              template = targetName.includes('多普勒') ? assetInfo?.info?.metaphysic?.data?.name?.toLowerCase() || '' : '';
            }
  
            topTemplate = targetName.replace(/\s*\(.*?\)/g, '').trim() + template;
  
            // 添加查看历史价格按钮点击事件
            historyButton.addEventListener('click', function () {
              const existingPopups = document.querySelectorAll('.aaaaapopup');
              existingPopups.forEach(popup => popup.remove());
  
              // 调用请求函数
              sendRequest(wearValue, '', '', '1', targetName); // 传入磨损值和paintseed
            });
  
            // 添加按模板查询价格按钮
            const templateButton = document.createElement('button');
            templateButton.innerText = '按模板查询价格';
            templateButton.className = 'view-template-btn';
            templateButton.style.marginLeft = '10px';
            templateButton.style.cursor = 'pointer';
            templateButton.style.padding = '8px 15px';
            templateButton.style.backgroundColor = '#4c97f0';
            templateButton.style.border = 'none';
            templateButton.style.color = '#fff';
            templateButton.style.borderRadius = '4px';
            templateButton.style.fontSize = '14px';
            templateButton.style.transition = 'background-color 0.3s';
  
            // 悬浮效果
            templateButton.addEventListener('mouseenter', () => {
              templateButton.style.backgroundColor = '#3873b2';
            });
            templateButton.addEventListener('mouseleave', () => {
              templateButton.style.backgroundColor = '#4c97f0';
            });
  
            templateButton.addEventListener('click', function () {
              const existingPopups = document.querySelectorAll('.aaaaapopup');
              existingPopups.forEach(popup => popup.remove());
  
              // 调用请求函数
              sendRequest(wearValue, paintseed, template, '2', targetName); // 传入磨损值和paintseed
            });
            // 创建显示T1/T2的div
            const templateLabel = document.createElement('div');
            templateLabel.style.marginTop = '5px';
            templateLabel.style.fontSize = '12px';
            templateLabel.style.color = '#333';
            templateLabel.style.fontStyle = 'italic';
            // 根据模板和paintseed判断是否需要变更背景颜色
            if (templatesCollectionT1[topTemplate] && templatesCollectionT1[topTemplate].includes(Number(paintseed))) {
              row.style.backgroundColor = 'yellow'; // 满足条件则背景变为黄色
              templateLabel.innerText = 'T1'; // 显示T1
            } else if (templatesCollectionT2[topTemplate] && templatesCollectionT2[topTemplate].includes(Number(paintseed))) {
              // row.style.backgroundColor = 'lightblue'; // 满足条件则背景变为蓝色
              templateLabel.innerText = 'T2'; // 显示T2
            } else {
              row.style.backgroundColor = ''; // 不满足条件则恢复默认背景
            }
            // 将按钮添加到当前行
            row.appendChild(historyButton);
            row.appendChild(templateButton);
            row.appendChild(templateLabel); // 添加显示T1/T2的div
          }
        });
      }
    }
  
    // 每隔1秒检查并为表格行添加按钮
    setInterval(addHistoryButtonToRows, 1000); // 这样即使定时器还在运行，也只会执行一次
  
  })();