import Link from "next/link";
import HeaderBasic from "../components/HeaderBasic";
import Seo from "../components/Seo";

const LegalNotice = () => {
  return (
    <main className="page-container">
      <Seo title="LEGAL NOTICE" />

      <HeaderBasic title={{ text: "이용 약관" }} />
      <section className="flex flex-col gap-12 whitespace-pre-wrap break-keep px-12 pb-24 indent-2 text-base text-zinc-800 xs:px-5">
        <strong>
          본 사이트는 실제 운영되는 사이트가 아닌 개인 학습용으로 제작된
          웹사이트입니다.
        </strong>
        <strong>
          This is not a actual website. This website was developed for personal
          learning.
        </strong>

        <em className="indent-0">
          사용자는 본 웹사이트를 참고하거나 사용하기 전에 다음 약관을 주의 깊게
          읽어야 합니다.
        </em>

        <p>
          https://raebef.netlify.app/ 웹사이트 (이하{" "}
          <strong>&quot;웹사이트&quot;</strong>) 에 오신 것을 환영합니다.
        </p>
        <div>
          본 웹사이트는 실제가 아닌 RAREBEEF의 개인 학습용으로 제작된
          웹사이트이며 어떠한 수익 창출도 이루어지지 않습니다. 본 웹사이트는
          Google LLC의 Firebase (이하 <strong>&quot;파이어베이스&quot;</strong>
          )의 서비스를 이용하며 웹사이트를 운영 및 이용하며 발생되는 개인정보를
          포함한 데이터는 모두 파이어베이스에서 관리됩니다. 웹사이트의 개발자인
          RAREBEEF는 본 웹사이트를 이용할 수 있는 테스트용 아이디와 비밀번호를
          제공합니다. 특별한 이유가 없을 경우 회원가입 대신 테스트용 계정을
          사용할 것을 권장드립니다. 또한 부득이 회원가입이 필요한 경우 실제
          성명과 이메일이 아닌 가상의 정보를 입력해도 별도의 인증 없이
          회원가입이 가능합니다.
          <div className="flex flex-col gap-1 p-5 indent-0">
            <div>아이디 : test@test.com</div>
            <div>비밀번호 : test123</div>
          </div>
        </div>
        <em className="indent-0">
          주의 : 이하 내용은 실제 이용 약관이 아닌 예시입니다.
        </em>
        <p>
          본 웹사이트의 사용은 다음 이용 약관 (이하
          <strong>&quot;이용 약관&quot;</strong>)의 적용을 받습니다. 본
          웹사이트에 방문함으로써 귀하는 조건 없이 다음 이용 약관을 준수하고
          해당 약관의 적용을 받는 것에 동의하게 됩니다. 이용 약관의 전체 내용에
          동의하지 않는 경우 즉시 본 웹사이트 이용을 중지하여 주시기 바랍니다.
        </p>
        <p>
          RAREBEEF는 본인의 단독 재량에 따라 본 웹사이트의 이용 약관을 수정할 수
          있는 권한을 보유합니다. 약관 수정 이후에 본 웹사이트를 사용하는 것은
          수정된 버전의 이용 약관에 완전히 동의한다는 의미로 간주됩니다.
        </p>
        <ol className="flex flex-col gap-12">
          <li className="flex flex-col gap-5">
            <strong className="indent-0">1. 지적 재산권</strong>
            <p>
              웹사이트에 등록 되어있는 제품들 (이하{" "}
              <strong>&quot;제품&quot;</strong>
              )은 모두 본 웹사이트에서 실제 판매되는 제품이 아니며 RAREBEEF 및
              본 웹사이트와 관련이 없는 제품입니다. 제품 사진 또는 제품과 관련된
              사진 (이하 <strong>&quot;외부 사진&quot;</strong>
              )은 인터넷에 업로드 된 제품 사진을 임의로 선정하여 사용한 것이며
              외부 사진을 제외한 모든 정보는 임의로 창작된 것이고 만일 실제와
              같은 경우가 있더라도 이는 우연에 의한 것임을 밝힙니다. RAREBEEF와
              본 웹사이트는 제품 사진의 실제 대상과 그 소유주에 대해 누가 되거나
              신뢰를 떨어뜨리기 위한 목적과 어떠한 수익 창출도 없음을 알려
              드립니다.
            </p>
            <p>
              이하 주장되는 RAREBEEF의 권리와 자산에 외부 사진은 포함되지
              않습니다.
            </p>
            <p>
              <strong>&quot;Raebef&quot;</strong> 상표와 본 웹사이트에 대한 모든
              자료는 RAREBEEF 의해 등록되어 있습니다.
            </p>
            <p>
              등록 또는 웹사이트 게시 여부와 관계없이, &quot;Raebef&quot; 상표를
              포함하되 이에 국한되지 않고, 모든 상표와 로고를 비롯해 연관되어
              웹사이트상에 복제된 기타 연관된 특징적인 마크는 RAREBEEF의 독점적
              자산입니다. 이러한 상표 및 기호는 RAREBEEF에서 비롯되지 않은 모든
              제품 또는 서비스와 연관하여 사용자에게 혼돈을 유발할 가능성이 있는
              방식 또는 RAREBEEF 라는 이름 및 &quot;Raebef&quot; 상표와
              &quot;Raebef&quot; 상표를 포함하는 제품에 누가 되거나 신뢰를
              떨어뜨리는 어떠한 방식으로도 사용될 수 없습니다. 귀하는 본
              웹사이트를 비롯해 여기에 포함된 모든 텍스트, 정보, 데이터, 이미지,
              아이콘, 사진, 일러스트레이션, 멀티미디어 콘텐츠(그래픽, 오디오 및
              비디오), 차트, 색인, 설명, 소프트웨어, HTML 코드, 그 안에 포함된
              화면 및 유사 자료를 포함하되 이에 국한되지 않는 모든
              콘텐츠(집합적으로 “콘텐츠”)는 RAREBEEF가 소유하거나 라이센스를
              가지고 있으며, 특허권, 저작권, 영업 비밀, 상호, 상표, 서비스 마크,
              저작 인격권, 노하우, 기타 법률 또는 국제적 관습에 따라 전 세계
              국가 또는 관할지역에서 인정되는 유사한 권리를 포함하되 이에
              국한되지 않는 국제 지적 재산권법에 의해 보호됨을 인정하고 그에
              동의합니다.
            </p>
            <p>
              본 웹사이트의 이용은 상업적 이유가 아닌 귀하 개인의 사적인 용도인
              경우에 한해 허용됩니다. 웹사이트에 별도로 표시한 경우를 제외하고
              본 이용 약관에 따라 귀하는 사업적 용도가 아닌 개인적 사용만을 위해
              공인된 액세스를 얻은 콘텐츠를 사용, 다운로드, 복사, 저장, 조작,
              재구성, 인쇄 또는 표시할 수 있습니다. 그러한 경우가 아니라면
              귀하는 이 웹사이트 또는 여기에 포함된 기타 콘텐츠를 다운로드,
              복사, 저장, 조작, 재구성, 인쇄, 표시, 출판, 전송, 배포, 파생물
              제작, 재판매하거나 다른 용도로 사용할 수 없습니다. 본 웹사이트
              사용의 결과로 웹사이트의 콘텐츠, 자료 또는 소프트웨어에서
              유래하거나 이에 관련된 어떠한 권리, 소유권 및/또는 이익도 귀하에게
              부여되거나 귀하가 획득했다고 간주될 수 없습니다. 귀하는 본
              웹사이트 및 콘텐츠에 포함된 모든 저작권 또는 상표 고지와 기타
              고지를 인정하고 이를 준수할 것에 동의합니다. 전 세계 모든 국가에서
              모든 권리를 보유합니다.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <strong className="indent-0">2. 권리 포기</strong>
            <p>
              본 웹사이트 및 해당 컨텐츠는 &quot;있는 그대로&quot; 및
              &quot;가용한 범위 내에서&quot; 제공됩니다. 귀하는 적용 가능한
              소비자 법에 따라 특정한 권리를 가질 수 있으며 이 이용 약관은
              그러한 권리에 영향을 미치지 않습니다. 해당 법률에서 허용하는 최대
              범위까지, RAREBEEF는 악의적인 프로그램(바이러스, 웜 또는 트로이
              목마 등)이나 특정 목적에 대한 적합성에 대한 묵시적 보증을
              포함하거나 포함하지 않는 명시적 또는 묵시적 보증, 조건 및 표현을
              모두 부인합니다.
            </p>
            <p>
              RAREBEEF는 어떠한 경우에도 다음에 의해 발생한 직접, 간접, 우발적,
              부수적, 재정적 또는 비 재정적 손해(수익 또는 매출, 데이터 또는
              프로그래밍 손실에 대한 손해를 포함하되 이에 국한되지 않음)에 대해
              비록 RAREBEEF가 그러한 손해 가능성에 대해 이미 고지를 받았다
              하더라도 (계약상 또는 비계약상의 어떠한 근거로도) 책임을 지지
              않습니다.
            </p>

            <ol className="flex flex-col gap-2 p-5 indent-0">
              <li>
                (a) 본 웹사이트상에서, 또는 웹사이트를 통해 액세스된 정보의
                지연, 부정확, 오류, 누락으로 인해 유발된 손실 또는 손해를
                포함하되 이에 국한되지 않는 귀하의 웹사이트 사용,
              </li>
              <li>
                (b) 본 웹사이트를 통하거나 본 웹사이트에서 체결된 모든 거래,
              </li>
              <li>
                (c) 본 웹사이트상에서, 또는 웹사이트를 통해 액세스된 정보의
                전달이나 전송 실패 또는 통신 장애를 포함하되 이에 국한되지 않는
                이유로 인한 웹사이트 사용 불가,
              </li>
              <li>
                (d) 웹사이트와 관련되거나 웹사이트상에서 전달된 정보의 삭제,
                수정, 손상, 손실 또는 저장 실패,
              </li>
              <li>
                (e) 웹사이트상에서, 또는 웹사이트를 통해 획득한 제품 또는
                서비스의 사용,
              </li>
              <li>
                (f) 웹사이트에 대한 무단 액세스 및 전송 또는 데이터에 대한 무단
                변경,
              </li>
              <li>(g) 웹사이트상의 제삼자의 진술이나 행위 또는</li>
              <li>(h) 웹사이트와 관련된 모든 기타 문제.</li>
            </ol>
            <p>
              RAREBEEF는 본 웹사이트에 포함된 정보의 정확성과 적시성을 보장하기
              위한 모든 노력을 다하겠지만, 이 정보가 완벽하며 정확하고
              지속적으로 업데이트되며, 본 웹사이트에 어떠한 결함도 없거나 이러한
              결함이 수정될 것임을 완전하게 보장할 수 없습니다. RAREBEEF가 본
              목적으로 승인한 다른 회사에서 제공해왔거나 제공할 수 있는 제품이나
              서비스에 대한 어떠한 언급도 해당 제품 또는 서비스가 언제든지 제공
              가능하다고 확약하는 의미인 것은 아닙니다. 그러한 제품이나 서비스에
              대한 변경 또는 개선은 사전 통지 없이 언제든지 이루어질 수
              있습니다. RAREBEEF는 통지 여부와 관계없이 언제든지 일시적 또는
              영구적으로 웹사이트(또는 그 일부)를 수정 또는 사용 중단할 권리를
              가집니다. 귀하는 Raebef 웹사이트 수정, 일시 중지 또는 사용 중단에
              대해 RAREBEEF가 귀하나 제삼자에게 배상하지 않음에 동의합니다.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <strong className="indent-0">3. 제출</strong>
            <p>
              귀하는 본 웹사이트를 통해서나 다른 경로를 통해 우리에 공개하거나
              제출한 모든 제안서, 디자인, 콘셉트, 사진, 추천의 글, 기타 항목이나
              자료(개인 정보 제외)는 비밀 유지가 되지 않으며 귀하의 독점권이
              인정되지 않음에 동의합니다. RAREBEEF에 또는 Raebef에 제출함으로써
              귀하는 RAREBEEF에 제출물의 저작권을 포함한 모든 권리, 소유권,
              이익을 양도하는 것이 됩니다. RAREBEEF는 다음과 같은 의무가
              없습니다. (i) 제출물의 비밀 유지, (ii) 귀하 또는 누군가에게 제출물
              또는 제출물 사용에 대한 보상금을 지급, (iii) 제출에 응답하거나
              수령을 확인. 귀하는 귀하의 제출물이 저작권, 상표, 특허, 영업 비밀,
              사생활권 또는 기타 개인적 권리 또는 독점적 권리를 포함하되 이에
              국한되지 않고 제삼자의 권리를 침해하지 않음을 진술하고 보증합니다.
              제출을 통해 귀하는 RAREBEEF가 귀하나 다른 누군가에게 보상을
              지급하지 않고 광고, 홍보, 제품 개발, 기타 상업적 용도를 포함하되
              이에 국한되지 않는 목적으로 제출물을 복사, 게시, 배포, 사용할
              권리를 보유하지만 그렇게 할 의무는 갖지 않음에 동의하게 됩니다.
              제출물의 콘텐츠에 대한 책임은 현재는 물론 향후에도 귀하에게
              단독으로 있습니다. 제3조의 규정은 해당 법률과 상충되지 않는
              범위에서만 적용합니다.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <strong className="indent-0">4. 쿠키</strong>
            <p>
              쿠키는 웹사이트에서 효율적 기능을 보장하고, 이용자 기호에 맞춘
              온라인 광고 메시지를 발송하는 것을 포함하여 서비스를 개선하기 위해
              사용됩니다. 쿠키는 귀하가 방문하는 웹사이트의 인터넷 (보통은
              귀하의 브라우저)에 접근 시 귀하가 사용하는 터미널로 보내지는 작은
              문자 파일입니다. 쿠키는 귀하가 해당 웹사이트를 추후 방문 시 인식될
              수 있도록 귀하의 컴퓨터나 디바이스에 저장됩니다. 대부분의
              브라우저는 초기에 쿠키를 수락하도록 설정되어 있습니다. 하지만
              귀하는 언제든지 모든 쿠키를 거부하거나 새로운 쿠키가 전송될 때
              귀하에게 알리도록 브라우저를 재설정할 수 있습니다. 그러나
              모든쿠키를 거부하면 웹사이트의 특정 기능을 사용하지 못하게 될 수
              있습니다.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <strong className="indent-0">5. 개인정보보호</strong>
            <p>
              RAREBEEF는 웹사이트 이용자의 개인 식별 정보(통칭{" "}
              <strong>&quot;개인 데이터&quot;</strong>
              )의 기밀성, 무결성 및 보안을 유지하는 것이 사용자에 있어 중요함을
              이해합니다. 일반적으로 귀하는 개인 데이터를 제공하지 않고
              웹사이트에 액세스하고 탐색할 수 있습니다. 그렇지만 웹사이트의
              서비스, 활동, 기능에 참여하기 위해 일부 개인 데이터를 의도적으로
              자진해서 제공해 줄 것을 요청받을 수도 있습니다. 이러한 웹사이트
              섹션 사용을 목적으로 요청을 받게 되는 경우 귀하는 개인 데이터
              처리에 동의하고 사실이며 정확한 현재 시점의 완전한 정보를 제공하는
              데 동의함을 명시하는 관련 개인정보 보호정책을 읽을 의무가
              있습니다.
            </p>
            <p>
              RAREBEEF와 Raebef는 개인 데이터 저장과 관리에 파이어베이스의
              서비스를 이용함으로써 개인정보의 처리를 Google LLC에
              위탁하였습니다. 귀하가 귀하의 개인 데이터를 자진해서 제공할 경우
              이에 대해 완전히 동의한다는 의미로 간주됩니다. RAREBEEF와 Raebef는
              웹사이트가 운영되거나 귀하가 웹사이트를 이용하며 발생하는 문제 중
              파이어베이스에서 제공하는 서비스를 사용하거나 신뢰함으로써 발생한
              손해나 손실에 대해 어떠한 책임도 지지 않습니다. 제5조의 규정은
              해당 법률과 상충되지 않는 범위에서만 적용합니다. 자세한 내용은{" "}
              <Link href="/privacy-policy" className="underline">
                개인정보 처리 방침
              </Link>{" "}
              혹은{" "}
              <Link
                href="https://policies.google.com/privacy"
                className="underline"
              >
                구글 개인정보 처리 방침
              </Link>{" "}
              을 참조하십시오.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <strong className="indent-0">6. 다른 웹사이트로의 링크</strong>
            <p>
              웹사이트는 자사 이외의 웹사이트로의 링크를 포함할 수 있습니다.
              이러한 웹사이트는 해당 사이트의 자체적인 이용 약관을 포함하고 이에
              적용을 받거나 약관이 없을 수 있습니다. RAREBEEF는 그러한
              웹사이트에 대해 어떠한 책임도 지지 않으며 이러한 링크는 사용자의
              편의를 위해서만 제공됩니다. 그러한 링크는 광고업체, 콘텐츠 제공자
              또는 공동 브랜드 계약에 따라 Raebef 로고 및/또는 스타일을 사용할
              수 있는 기타 회사로 연결되는 링크일 수 있습니다. 이들
              웹사이트에서는 귀하에게 자체 쿠키를 전송할 수 있으며 이용 약관과는
              다른 방식으로 정보를 수집하고 사용할 수 있습니다. 게다가
              RAREBEEF는 이러한 웹사이트와 외부 소스를 제어할 수 없습니다. 해당
              법률에서 허용하는 최대 범위까지, RAREBEEF는 그러한 웹사이트나 외부
              소스에 대한 책임을 질 수 없으며 그러한 웹사이트 및 외부 소스 또는
              이러한 사이트에서 분화된 사이트에서 이용 가능한 콘텐츠, 광고,
              제품, 서비스 및 기타 자료에 대한 책임을 거부합니다. 또한,
              RAREBEEF는 그러한 웹사이트나 외부 소스에서 제공하는 콘텐츠, 상품
              및 서비스를 사용하거나 이러한 정보를 신뢰함으로써 발생한 손해나
              손실에 대해 그것이 사실이든 일방적 주장이든 관계없이 어떠한 책임도
              지지 않습니다.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <strong className="indent-0">7. 보안</strong>
            <p>
              인터넷을 통한 데이터 전송은 완전히 안전하다고 보장할 수 없습니다.
              RAREBEEF가 제어할 수 없는 제삼자가 RAREBEEF가 허가하거나 인지하지
              못한 사이에 진정한 목적이나 합법적인 목적 없이 전송 내용이나 개인
              통신에 액세스하거나 가로챌 가능성이 있습니다. RAREBEEF는 개인
              정보를 보호하기 위해 가능한 모든 노력을 다하고 있습니다. 하지만
              이용자가 본사와 파이어베이스에 전송한 모든 정보의 완전한 보안을
              보장할 수는 없습니다. 데이터 전송은 귀하 자신의 책임 하에
              이루어지며 RAREBEEF 또는 Raebef는 RAREBEEF의 부주의한 행동에서
              직접 기인하지 않은 보안 위반에 대해서는 책임을 지지 않습니다.
            </p>
          </li>
          <li className="flex flex-col gap-5">
            <strong className="indent-0">8. 이용 약관에 대한 동의</strong>
            <p>
              본 웹사이트에 탐색 및 사용 귀하는 (a) 본 이용 약관에 동의하며, (b)
              귀하가 웹사이트를 사용할 경우 본 이용 약관을 준수할 것임을
              진술하며 보증합니다. 귀하는 이용 약관의 위반 또는 귀하의 웹사이트
              사용과 관련되거나 이로 인해 발생한 모든 손해, 비용, 부채, 소송,
              판결, 처벌, 경비, 의무, 손실, 청구, 법적 조치, 비용 및 지출(변호사
              수임료 및 경비를 포함하되 이에 국한되지 않음)로부터 RAREBEEF와
              Raebef를 법률적으로 면책함에 동의합니다.
            </p>
          </li>
        </ol>
        <em className="mt-10 indent-0">
          마지막 업데이트: 2023년 7 월 31 일. RAREBEEF.
        </em>
      </section>
    </main>
  );
};

export default LegalNotice;
