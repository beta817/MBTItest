var value1 = document.getElementById('radio_E1').value;
var value2 = document.getElementById('radio_E2').value;
var value3 = document.getElementById('radio_E3').value;
var value4 = document.getElementById('radio_E4').value;

function getCheckedRadioValue(group) //선택된 라디오의 밸류 출력
{
    var radios = document.getElementsByName(group);
    var selectedValue = null;

    for (var i = 0; i < radios.length; i++) 
    {
        if (radios[i].checked) 
        {
            selectedValue = radios[i].value;
            break;
        }
    }

    return selectedValue;
}

function transNUM(f_getCheckedRadioValue) //밸류의 텍스트에 따른 점수
{
    var a;
    var selectValue = getCheckedRadioValue(f_getCheckedRadioValue);
    if (selectValue === 'option_1')
    {
        a = 4
    }
    else if (selectValue === 'option_2')
    {
        a = 3
    }
    else if (selectValue === 'option_3')
    {
        a = 2
    }
    else if(selectValue === 'option_4')
    {
        a = 1
    }
    else
    {
        a = 0
    }
    return a;
}

var MBTI_E = transNUM('Q1_Group') + transNUM('Q9_Group') + transNUM('Q17_Group') + transNUM('Q25_Group') + transNUM('Q33_Group'); //성격 유형 점수 비교하기 위한 변수 선언
var MBTI_I = transNUM('Q2_Group') + transNUM('Q10_Group') + transNUM('Q18_Group') + transNUM('Q26_Group') + transNUM('Q34_Group');
var MBTI_S = transNUM('Q3_Group') + transNUM('Q11_Group') + transNUM('Q19_Group') + transNUM('Q27_Group') + transNUM('Q35_Group');
var MBTI_N = transNUM('Q4_Group') + transNUM('Q12_Group') + transNUM('Q20_Group') + transNUM('Q28_Group') + transNUM('Q36_Group');
var MBTI_T = transNUM('Q5_Group') + transNUM('Q13_Group') + transNUM('Q21_Group') + transNUM('Q29_Group') + transNUM('Q37_Group');
var MBTI_F = transNUM('Q6_Group') + transNUM('Q14_Group') + transNUM('Q22_Group') + transNUM('Q30_Group') + transNUM('Q38_Group');
var MBTI_J = transNUM('Q7_Group') + transNUM('Q15_Group') + transNUM('Q23_Group') + transNUM('Q31_Group') + transNUM('Q39_Group');
var MBTI_P = transNUM('Q8_Group') + transNUM('Q16_Group') + transNUM('Q24_Group') + transNUM('Q32_Group') + transNUM('Q40_Group');

function updateMBTIscore() //성격 유형 점수 업데이트용 함수
{
    MBTI_E = transNUM('Q1_Group') + transNUM('Q9_Group') + transNUM('Q17_Group') + transNUM('Q25_Group') + transNUM('Q33_Group'); //성격 유형 점수 비교하기 위한 변수 선언
    MBTI_I = transNUM('Q2_Group') + transNUM('Q10_Group') + transNUM('Q18_Group') + transNUM('Q26_Group') + transNUM('Q34_Group');
    MBTI_S = transNUM('Q3_Group') + transNUM('Q11_Group') + transNUM('Q19_Group') + transNUM('Q27_Group') + transNUM('Q35_Group');
    MBTI_N = transNUM('Q4_Group') + transNUM('Q12_Group') + transNUM('Q20_Group') + transNUM('Q28_Group') + transNUM('Q36_Group');
    MBTI_T = transNUM('Q5_Group') + transNUM('Q13_Group') + transNUM('Q21_Group') + transNUM('Q29_Group') + transNUM('Q37_Group');
    MBTI_F = transNUM('Q6_Group') + transNUM('Q14_Group') + transNUM('Q22_Group') + transNUM('Q30_Group') + transNUM('Q38_Group');
    MBTI_J = transNUM('Q7_Group') + transNUM('Q15_Group') + transNUM('Q23_Group') + transNUM('Q31_Group') + transNUM('Q39_Group');
    MBTI_P = transNUM('Q8_Group') + transNUM('Q16_Group') + transNUM('Q24_Group') + transNUM('Q32_Group') + transNUM('Q40_Group');

}

var yourMBTI; //사용자 MBTI

function updateyourMBTI() //MBTI 업데이트 함수
{
    if (MBTI_E > MBTI_I) //E
    {
        if(MBTI_S > MBTI_N) //S
        {
            if(MBTI_T > MBTI_F) //T
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ESTJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ESTP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ESTX";
                }
            }
            else if(MBTI_T < MBTI_F) //F
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ESFJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ESFP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ESFX";
                }
            }
            else if(MBTI_T === MBTI_F) ///X
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ESXJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ESXP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ESXX";
                }
            }
        }
        else if(MBTI_S < MBTI_N) //N    
        {
            if(MBTI_T > MBTI_F) //T
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ENTJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ENTP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ENTX";
                }
            }
            else if(MBTI_T < MBTI_F) //F
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ENFJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ENFP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ENFX";
                }
            }
            else if(MBTI_T === MBTI_F) ///X
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ENXJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ENXP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ENXX";
                }
            }
        }
        else if(MBTI_S === MBTI_N) //X
        {
            if(MBTI_T > MBTI_F) //T
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "EXTJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "EXTP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "EXTX";
                }
            }
            else if(MBTI_T < MBTI_F) //F
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "EXFJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "EXFP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "EXFX";
                }
            }
            else if(MBTI_T === MBTI_F) ///X
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "EXXJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "EXXP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "EXXX";
                }
            }
        }
    }
    else if(MBTI_E < MBTI_I) //I
    {
        if(MBTI_S > MBTI_N) //S
        {
            if(MBTI_T > MBTI_F) //T
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ISTJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ISTP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ISTX";
                }
            }
            else if(MBTI_T < MBTI_F) //F
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ISFJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ISFP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ISFX";
                }
            }
            else if(MBTI_T === MBTI_F) ///X
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ISXJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ISXP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ISXX";
                }
            }
        }
        else if(MBTI_S < MBTI_N) //N
        {
            if(MBTI_T > MBTI_F) //T
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "INTJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "INTP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "INTX";
                }
            }
            else if(MBTI_T < MBTI_F) //F
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "INFJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "INFP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "INFX";
                }
            }
            else if(MBTI_T === MBTI_F) ///X
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "INXJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "INXP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "INXX";
                }
            }
        }
        else if(MBTI_S === MBTI_N) //X
        {
            if(MBTI_T > MBTI_F) //T
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "EXTJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "EXTP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "EXTX";
                }
            }
            else if(MBTI_T < MBTI_F) //F
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "EXFJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "EXFP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "EXFX";
                }
            }
            else if(MBTI_T === MBTI_F) ///X
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "EXXJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "EXXP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "EXXX";
                }
            }
        }
    }
    else if(MBTI_E === MBTI_I) //X
    {
        if(MBTI_S > MBTI_N) //S
        {
            if(MBTI_T > MBTI_F) //T
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ISTJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ISTP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ISTX";
                }
            }
            else if(MBTI_T < MBTI_F) //F
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ISFJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ISFP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ISFX";
                }
            }
            else if(MBTI_T === MBTI_F) ///X
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "ISXJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "ISXP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "ISXX";
                }
            }
        }
        else if(MBTI_S < MBTI_N) //N
        {
            if(MBTI_T > MBTI_F) //T
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "INTJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "INTP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "INTX";
                }
            }
            else if(MBTI_T < MBTI_F) //F
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "INFJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "INFP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "INFX";
                }
            }
            else if(MBTI_T === MBTI_F) ///X
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "INXJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "INXP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "INXX";
                }
            }
        }
        else if(MBTI_S === MBTI_N) //X

        {
            if(MBTI_T > MBTI_F) //T
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "XXTJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "XXTP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "XXTX";
                }
            }
            else if(MBTI_T < MBTI_F) //F
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "XXFJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "XXFP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "XXFX";
                }
            }
            else if(MBTI_T === MBTI_F) ///X
            {
                if(MBTI_J > MBTI_P) ///J
                {
                    yourMBTI = "XXXJ";
                }
                else if(MBTI_J < MBTI_P) //P
                {
                    yourMBTI = "XXXP";
                }
                else if(MBTI_S === MBTI_N) //X
                {
                    yourMBTI = "XXXX";
                }
            }
        }
    }
}

function TotalUpdate()
{
    updateMBTIscore()
    updateyourMBTI()
}

var radioButtons = document.querySelectorAll('input[type="radio"]') //라디오 버튼 누를때마다 변수 업데이트
for (var i = 0; i < radioButtons.length; i++) 
{
    radioButtons[i].addEventListener('click', TotalUpdate);
}

var ENFJ = "MBTI/ENFJ.html"; //MBTI별 링크 정의
var ENFP = "MBTI/ENFP.html";
var ENTJ = "MBTI/ENTJ.html";
var ENTP = "MBTI/ENTP.html";
var ESFJ = "MBTI/ESFJ.html";
var ESFP = "MBTI/ESFP.html";
var ESTJ = "MBTI/ESTJ.html";
var ESTP = "MBTI/ESTP.html";
var INFJ = "MBTI/INFJ.html";
var INFP = "MBTI/INFP.html";
var INTJ = "MBTI/INTJ.html";
var INTP = "MBTI/INTP.html";
var ISFJ = "MBTI/ISFJ.html";
var ISFP = "MBTI/ISFP.html";
var ISTJ = "MBTI/ISTJ.html";
var ISTP = "MBTI/ISTP.html";

function submitMBTI() //MBTI
{
    if (yourMBTI === "ENFJ")
    {
        window.location.href = ENFJ;
    }
    else if (yourMBTI === "ENFP")
    {
        window.location.href = ENFP;
    }
    else if (yourMBTI === "ENTJ")
    {
        window.location.href = ENTJ;
    }
    else if (yourMBTI === "ENTP")
    {
        window.location.href = ENTP;
    }
    else if (yourMBTI === "ESFJ")
    {
        window.location.href = ESFJ;
    }
    else if (yourMBTI === "ESFP")
    {
        window.location.href = ESFP;
    }
    else if (yourMBTI === "ESTJ")
    {
        window.location.href = ESTJ;
    }
    else if (yourMBTI === "ESTP")
    {
        window.location.href = ESTP;
    }
    else if (yourMBTI === "INFJ")
    {
        window.location.href = INFJ;
    }
    else if (yourMBTI === "INFP")
    {
        window.location.href = INFP;
    }
    else if (yourMBTI === "INTJ")
    {
        window.location.href = INTJ;
    }
    else if (yourMBTI === "INTP")
    {
        window.location.href = INTP;
    }
    else if (yourMBTI === "ISFJ")
    {
        window.location.href = ISFJ;
    }
    else if (yourMBTI === "ISFP")
    {
        window.location.href = ISFP;
    }
    else if (yourMBTI === "ISTJ")
    {
        window.location.href = ISTJ;
    }
    else if (yourMBTI === "ISTP")
    {
        window.location.href = ISTP;
    }
    else
    {
        alert("예상치 못할 오류가 발생했습니다.\n선택 항목를 바꾸어 검사를 다시 진행해주십시오.")
        scrollToTop();
        setTimeout(function() 
        {
            location.reload();
        }, 1500);
    }
}

function scrollToTop() //스크롤 위로 하는 함수
{ 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}