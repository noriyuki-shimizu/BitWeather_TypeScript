declare type ConditionCode = {
    id: number;
    meaning: string;
    icon: string;
};

declare type WindDigreeData = {
    f: number;
    t: number;
    windDigree: string;
};

declare type WeatherCallbackType = (weatherDataList: any[]) => void;
