import CustomAccordion from "../components/CustomAccordion";

function Recipe(){
    return(
        <div className={'alcoholWrap'}>
            <div className={'topImage'}/>
            <CustomAccordion
                en={'Limoncello Pizz'}
                kr={'리몬첼로 피즈'}
                base={'Limoncello'}
                alcohol={'9%'}
                hash={'#리몬첼로#하이볼#탄산#상콤#Limoncello#hiball#fresh'}
                recipe={'리몬첼로1oz / 탄산수 풀업 / 라임 절반 스퀴즈'}
                desc={'알코올향 보다는 레몬향이 나고, 도수가 낮아 누구나 편하게 즐길 수 있는 칵테일'}
            />
            <CustomAccordion
                en={'Mojito'}
                kr={'모히또'}
                base={'Appleton Gold Rum'}
                alcohol={'12%'}
                hash={'#모히또#여름#라임#상큼#mojito#summer#lime#fresh'}
                recipe={'애플민트 한 줌 / 라임 절반 머들링 / 럼1oz / 슈가시럽 0.5oz / 탄산수 풀업 / '}
                desc={'여름의 대표 칵테일, 럼의 달큰한 향을 슈가시럽으로 강조시키고 라임의 상큼함과 탄산의 톡 쏘는맛이 일품'}
            />
            <CustomAccordion
                en={'GoldCello Pizz'}
                kr={'골드첼로 피즈'}
                base={'Appleton GoldRum'}
                alcohol={'18%'}
                hash={'#럼#알코올#취하기#Rum#Alcohol'}
                recipe={'럼1oz / 리몬첼로0.5oz / 탄산수 풀업 / 라임 절반 스퀴즈'}
                desc={'럼 향이 강하게 나며, 그 이후에 라임과 리몬첼로의 상큼하며 달달한 향이 올라옴'}
            />
            <CustomAccordion
                en={'Sweet Highball'}
                kr={'스위트 피즈'}
                base={'Appleton GoldRum'}
                alcohol={'10%'}
                hash={'#럼#달콤#취하기#Rum#Alcohol#sweet'}
                recipe={'럼1oz/ 슈가시럽1oz / 탄산수 풀업'}
                desc={'럼을 이용한 하이볼로, 기존의 하이볼보다 달달하다'}
            />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Recipe
