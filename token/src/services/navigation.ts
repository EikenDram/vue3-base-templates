export interface INavigationItem {
    title: string,
    route: string,
    icon: string,
    children: INavigationItem[]
}

export const navigation = (): INavigationItem[] => {
    return [
        { title: 'app.navigation.home', route: '/home', icon: 'fas fa-house', children: [] },
    ]
}