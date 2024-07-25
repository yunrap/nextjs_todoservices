"use client";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import Image from "next/image";
import axios from "axios";
import { RefObject, useEffect, useRef, useState } from "react";
import { DetailProps } from "@/types/ResultDataType";

const detail = () => {
  const params = useParams();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [comment, setComment] = useState("");
  const [detail, setDetail] = useState<DetailProps>();
  const [imageURL, setImageURL] = useState();
  const [image, setImage] = useState("/images/img.svg");

  useEffect(() => {
    if (detail?.imageUrl) setImage(detail?.imageUrl);
    getDetail();
  }, []);

  useEffect(() => {
    if (detail?.imageUrl) setImage(detail?.imageUrl);
  }, [detail?.imageUrl]);

  // 상세조회
  const getDetail = async () => {
    try {
      const response = await axios.get(`/api/yunyeji/items/${params.idx}`);
      setDetail(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  //이미지첨부
  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    //사이즈체크, 영어만체크
    if (filesizeCk(file) && englishCk(file.name)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setImage(e.target.result);
        }
      };

      const formDatas = new FormData();
      formDatas.append("image", file);
      try {
        const imageRes = await axios.post(
          `/api/yunyeji/images/upload/`,
          formDatas,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        const image_URL = imageRes.data.url;
        setImageURL(image_URL);
      } catch {
        console.log(e);
      }
    }
  };

  // 수정
  const onClickModify = async () => {
    const formData = {
      name: inputRef.current?.value,
      memo: comment,
      imageUrl: imageURL,
      isCompleted: detail?.isCompleted,
    };
    try {
      await axios.patch(`/api/yunyeji/items/${params.idx}`, formData);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  // 삭제
  const onClickDelete = async () => {
    try {
      await axios.delete(`/api/yunyeji/items/${params.idx}`);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  const englishCk = (name: string) => {
    var pattern2 = /^[a-z|A-Z]+$/; //영어만체크
    const nameVal = name.split(".").shift();
    if (nameVal && !pattern2.test(nameVal)) {
      alert("영어만 입력해주세요");
      return false;
    } else {
      return true;
    }
  };

  const filesizeCk = (file: any) => {
    var mb = 1024 * 1024; //1mb(메가)
    var limit_size = mb * 5;

    var upload_size = file.size;

    if (limit_size < upload_size) {
      alert("5mb 사이즈 미만만 \n업로드가 가능합니다.");
      return false;
    } else {
      return true;
    }
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: RefObject<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (type.current) {
      type.current.value = value;
    }
  };

  return (
    <div className="max-w-[1024px] m-auto p-4 md:pt-[24px] lg:p-0">
      <div className="relative w-full">
        <div
          className={`h-16 w-full rounded-3xl bg-white border-2 ${detail?.isCompleted ? "bg-violet" : ""} input-transparent"`}
        />
        <div>
          <input
            defaultValue={detail?.name}
            className="underline h-[64px] w-[180px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] outline-none input-transparent absolute text-center bg"
            onChange={(ev) => onChangeInput(ev, inputRef)}
            ref={inputRef}
          ></input>
          <label
            className={`absolute top-[25%] left-[13%] ${detail?.isCompleted ? "bg-[url('/images/checkbox_ck.svg')] " : "bg-[url('/images/checkbox.svg')] "}w-8 h-8 bg-no-repeat`}
          ></label>
        </div>
      </div>
      <div className="py-4 md:py-4">
        <div className="relative w-full h-[311px] rounded-3xl bg-slate-50 border-2 border-slate-300 border-dashed">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image
              src={image ? image : ""}
              width={64}
              height={64}
              alt="프로필 이미지입니다"
            />
          </div>
          <div className="absolute right-4 bottom-4">
            <Image
              src="/images/img_btn.svg"
              onClick={() => fileInput.current?.click()}
              alt="home"
              width={64}
              height={64}
              className=""
            />
          </div>
        </div>
        <input
          type="file"
          name="file"
          id="input-file"
          accept="image/*"
          className="hidden"
          ref={fileInput}
          onChange={handleImage}
        ></input>
      </div>
      <div className="bg-[url('/images/memo.svg')] w-full h-[311px] rounded-3xl">
        <p className="text-center text-amber pt-6">Memo</p>
        <textarea
          defaultValue={detail?.memo}
          onChange={(e) => setComment(e.target.value)}
          className="outline-none textarea-transparent w-full pt-[100px] h-[240px] text-center"
        ></textarea>
      </div>
      <div className="pt-[24px] flex justify-center">
        <div>
          <Button
            onClick={onClickModify}
            variant={"lime"}
            size={"md"}
            label="수정 완료"
          />
        </div>
        <div>
          <Button
            onClick={onClickDelete}
            variant={"red"}
            size={"md"}
            label="삭제하기"
          />
        </div>
      </div>
    </div>
  );
};

export default detail;
