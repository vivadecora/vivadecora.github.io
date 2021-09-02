interface RouteInterface {
  path: string;
  name: string;
  component: string;
  pathToRegexpOptions: {
    strict: boolean;
  }
}

interface RouteNamesInterface {
  base: string;
  paginated: string;
}

export default class PaginationHelper {
  static pushPaginations (targets: string[], routes: RouteInterface[]): void {
    targets
      .filter(target => routes.find(route => route.name === target) !== null)
      .forEach((target) => {
        const baseRoute = routes.find(route => route.name === target)

        if (baseRoute) {
          const baseRouteIndex = routes.findIndex(route => route.name === target)
          const routeNames = PaginationHelper.getRouteNames(target)

          const paginatedRoute = {
            path: `${baseRoute.path}page/:pageNumber/`,
            name: routeNames.paginated,
            component: baseRoute.component,
            pathToRegexpOptions: {
              strict: true
            }
          }

          routes.splice(baseRouteIndex, 0, paginatedRoute)
        }
      })
  }

  static getRouteNames (origin: string): RouteNamesInterface {
    return {
      base: origin.endsWith('-paginated') ? origin.replace('-paginated', '') : origin,
      paginated: origin.endsWith('-paginated') ? origin : `${origin}-paginated`
    }
  }
}
