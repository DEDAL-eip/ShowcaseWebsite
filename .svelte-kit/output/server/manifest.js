export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Dedal_logo.png","Dedals_team.jpg","Dedals_team.png","Lille.jpg","Smartphone.png","Smartphone_logo.png","Timeline.png","favicon copy.png","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.0135e72d.js","app":"_app/immutable/entry/app.fcdc971c.js","imports":["_app/immutable/entry/start.0135e72d.js","_app/immutable/chunks/index.a5951acf.js","_app/immutable/chunks/singletons.04f959f1.js","_app/immutable/entry/app.fcdc971c.js","_app/immutable/chunks/index.a5951acf.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/api/apkVersions",
				pattern: /^\/api\/apkVersions\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/apkVersions/_server.ts.js')
			},
			{
				id: "/api/sendMail",
				pattern: /^\/api\/sendMail\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/sendMail/_server.ts.js')
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/download",
				pattern: /^\/download\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/fr",
				pattern: /^\/fr\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/fr/contact",
				pattern: /^\/fr\/contact\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/fr/download",
				pattern: /^\/fr\/download\/?$/,
				params: [],
				page: { layouts: [0,4,6,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/nouveauté",
				pattern: /^\/nouveauté\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/roadmap",
				pattern: /^\/roadmap\/?$/,
				params: [],
				page: { layouts: [0,8,], errors: [1,,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
