import LoginButton from "@Atoms/Button/Login";
import { getDepartmentsSelector } from "@Recoil/Register";
import { RegisterButtonType, CheckDuplicateButton } from "@Style/.";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { REF_NUM, REGISTER_DATAS } from "../common";
import { RegisterContainer, Title, Section, SubWrapper } from "../styles";
import { checkDuplicateId, checkMail, clickMail, RegisterClick } from "../util";
import { Container, SelectBox } from "./styles";

const RegisterInput = () => {
  const departments = useRecoilValue(getDepartmentsSelector);
  const [checkId, setCheckId] = useState<boolean>(false);
  const [mailKey, setMailKey] = useState<string>("");
  const [mailCheck, setMailCheck] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement[]>([]);
  const subjectRef = useRef<HTMLSelectElement>(null);
  const navigator = useNavigate();

  const handleRegisterClick = async () => {
    const res = await RegisterClick({
      inputRef,
      subjectRef,
      checkId,
      mailCheck,
    });
    if (res) navigator("/login");
  };

  const handleCheckDuplicateId = async () => {
    if (!inputRef.current[REF_NUM.ID]) return;
    const data = await checkDuplicateId({
      ref: inputRef,
      idx: REF_NUM.ID,
    });
    if (!data) return;
    setCheckId(true);
  };

  const handleClickMail = async () => {
    const cacheKey = await clickMail({
      ref: inputRef,
      idx: REF_NUM["이메일"],
    });
    setMailKey(cacheKey);
  };
  const handleCheckMail = async () => {
    const data = await checkMail({
      ref: inputRef,
      idx: REF_NUM["인증번호"],
      cacheKey: mailKey,
    });
    if (!data) return;
    setMailCheck(true);
  };

  return (
    <RegisterContainer>
      <Title>회원가입</Title>
      <Section>
        <SubWrapper>
          <Container>
            <div>{REGISTER_DATAS[REF_NUM.ID].title}</div>
            <input
              placeholder={REGISTER_DATAS[REF_NUM.ID].text}
              type={REGISTER_DATAS[REF_NUM.ID].type}
              ref={(el) =>
                ((inputRef.current as HTMLInputElement[])[REF_NUM.ID] =
                  el as HTMLInputElement)
              }
            />
          </Container>
          <LoginButton
            {...CheckDuplicateButton}
            title="중복확인"
            onClick={handleCheckDuplicateId}
          />
        </SubWrapper>

        <Container>
          <div>{REGISTER_DATAS[REF_NUM.PW].title}</div>
          <input
            placeholder={REGISTER_DATAS[REF_NUM.PW].text}
            type={REGISTER_DATAS[REF_NUM.PW].type}
            ref={(el) =>
              ((inputRef.current as HTMLInputElement[])[REF_NUM.PW] =
                el as HTMLInputElement)
            }
          />
        </Container>

        <Container>
          <div>{REGISTER_DATAS[REF_NUM.이름].title}</div>
          <input
            placeholder={REGISTER_DATAS[REF_NUM.이름].text}
            type={REGISTER_DATAS[REF_NUM.이름].type}
            ref={(el) =>
              ((inputRef.current as HTMLInputElement[])[REF_NUM.이름] =
                el as HTMLInputElement)
            }
          />
        </Container>
        <Container>
          <div>{REGISTER_DATAS[REF_NUM.학번].title}</div>
          <input
            placeholder={REGISTER_DATAS[REF_NUM.학번].text}
            type={REGISTER_DATAS[REF_NUM.학번].type}
            ref={(el) =>
              ((inputRef.current as HTMLInputElement[])[REF_NUM.학번] =
                el as HTMLInputElement)
            }
          />
        </Container>

        <SelectBox>
          <select ref={subjectRef}>
            {departments.map((item: any) => (
              <option
                key={item.departmentIdx}
                value={item.departmentIdx}
                label={item.name}
              >
              {item.name}
              </option>
            ))}
          </select>
        </SelectBox>
        
        <SubWrapper>
          <Container>
            <div>{REGISTER_DATAS[REF_NUM.이메일].title}</div>
            <input
              placeholder={REGISTER_DATAS[REF_NUM.이메일].text}
              type={REGISTER_DATAS[REF_NUM.이메일].type}
              ref={(el) =>
                ((inputRef.current as HTMLInputElement[])[REF_NUM.이메일] =
                  el as HTMLInputElement)
              }
            />
          </Container>
          <LoginButton
            {...CheckDuplicateButton}
            title="메일 인증"
            onClick={handleClickMail}
          />
        </SubWrapper>

        <SubWrapper>
          <Container>
            <div>{REGISTER_DATAS[REF_NUM.인증번호].title}</div>
            <input
              placeholder={REGISTER_DATAS[REF_NUM.인증번호].text}
              type={REGISTER_DATAS[REF_NUM.인증번호].type}
              ref={(el) =>
                ((inputRef.current as HTMLInputElement[])[REF_NUM.인증번호] =
                  el as HTMLInputElement)
              }
            />
          </Container>
          <LoginButton
            {...CheckDuplicateButton}
            title="확인하기"
            onClick={handleCheckMail}
          />
        </SubWrapper>
        <Container>
          <div>{REGISTER_DATAS[REF_NUM.핸드폰번호].title}</div>
          <input
            placeholder={REGISTER_DATAS[REF_NUM.핸드폰번호].text}
            type={REGISTER_DATAS[REF_NUM.핸드폰번호].type}
            ref={(el) =>
              ((inputRef.current as HTMLInputElement[])[REF_NUM.핸드폰번호] =
                el as HTMLInputElement)
            }
          />
        </Container>
      </Section>
      <LoginButton
        {...RegisterButtonType}
        title="가입하기"
        onClick={handleRegisterClick}
      />
    </RegisterContainer>
  );
};

export default RegisterInput;
