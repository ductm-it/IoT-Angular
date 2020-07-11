import { Nav } from './mobile-menu.component';
import { UrlService } from 'src/app/service/url.service';

export const navs: Nav[] = [
	{
		link: UrlService.INSTANCE.publicHome,
		title: "Home",
		navs: [
			{
				link: UrlService.INSTANCE.publicHome,
				title: "Home 1"
			},
			{
				link: UrlService.INSTANCE.publicHome,
				title: "Home 2"
			},
			{
				link: UrlService.INSTANCE.publicHome,
				title: "Home 3"
			}
		]
	},
	{
		link: "http://localhost:4200/#",
		title: "Find Work",
		navs: [
			{
				link: "http://localhost:4200/#",
				title: "Browse Jobs",
				navs: [
					{
						link: "http://localhost:4200/jobs-list-layout-full-page-map.html",
						title: "Full Page List + Map"
					},
					{
						link: "http://localhost:4200/jobs-grid-layout-full-page-map.html",
						title: "Full Page Grid + Map"
					},
					{
						link: "http://localhost:4200/jobs-grid-layout-full-page.html",
						title: "Full Page Grid"
					},
					{
						link: "http://localhost:4200/jobs-list-layout-1.html",
						title: "List Layout 1"
					},
					{
						link: "http://localhost:4200/jobs-list-layout-2.html",
						title: "List Layout 2"
					},
					{
						link: "http://localhost:4200/jobs-grid-layout.html",
						title: "Grid Layout"
					}
				]
			},
			{
				link: "http://localhost:4200/#",
				title: "Browse Tasks",
				navs: [
					{
						link: "http://localhost:4200/tasks-list-layout-1.html",
						title: "List Layout 1"
					},
					{
						link: "http://localhost:4200/tasks-list-layout-2.html",
						title: "List Layout 2"
					},
					{
						link: "http://localhost:4200/tasks-grid-layout.html",
						title: "Grid Layout"
					},
					{
						link: "http://localhost:4200/tasks-grid-layout-full-page.html",
						title: "Full Page Grid"
					}
				]
			},
			{
				link: "http://localhost:4200/browse-companies.html",
				title: "Browse Companies"
			},
			{
				link: "http://localhost:4200/single-job-page.html",
				title: "Job Page"
			},
			{
				link: "http://localhost:4200/single-task-page.html",
				title: "Task Page"
			},
			{
				link: "http://localhost:4200/single-company-profile.html",
				title: "Company Profile"
			}
		]
	},
	{
		link: "http://localhost:4200/#",
		title: "For Employers",
		navs: [
			{
				link: "http://localhost:4200/#",
				title: "Find a Freelancer",
				navs: [
					{
						link: "http://localhost:4200/freelancers-grid-layout-full-page.html",
						title: "Full Page Grid"
					},
					{
						link: "http://localhost:4200/freelancers-grid-layout.html",
						title: "Grid Layout"
					},
					{
						link: "http://localhost:4200/freelancers-list-layout-1.html",
						title: "List Layout 1"
					},
					{
						link: "http://localhost:4200/freelancers-list-layout-2.html",
						title: "List Layout 2"
					}
				]
			},
			{
				link: "http://localhost:4200/single-freelancer-profile.html",
				title: "Freelancer Profile"
			},
			{
				link: "http://localhost:4200/dashboard-post-a-job.html",
				title: "Post a Job"
			},
			{
				link: "http://localhost:4200/dashboard-post-a-task.html",
				title: "Post a Task"
			}
		]
	},
	{
		link: UrlService.INSTANCE.privateDashboard,
		title: "Dashboard",
		navs: [
			{
				link: UrlService.INSTANCE.privateDashboard,
				title: "Dashboard"
			},
			{
				link: UrlService.INSTANCE.privateMessage,
				title: "Messages"
			},
			{
				link: "http://localhost:4200/dashboard-bookmarks.html",
				title: "Bookmarks"
			},
			{
				link: "http://localhost:4200/dashboard-reviews.html",
				title: "Reviews"
			},
			{
				link: "http://localhost:4200/dashboard-manage-jobs.html",
				title: "Jobs",
				navs: [
					{
						link: "http://localhost:4200/dashboard-manage-jobs.html",
						title: "Manage Jobs"
					},
					{
						link: "http://localhost:4200/dashboard-manage-candidates.html",
						title: "Manage Candidates"
					},
					{
						link: "http://localhost:4200/dashboard-post-a-job.html",
						title: "Post a Job"
					}
				]
			},
			{
				link: "http://localhost:4200/dashboard-manage-tasks.html",
				title: "Tasks",
				navs: [
					{
						link: "http://localhost:4200/dashboard-manage-tasks.html",
						title: "Manage Tasks"
					},
					{
						link: "http://localhost:4200/dashboard-manage-bidders.html",
						title: "Manage Bidders"
					},
					{
						link: "http://localhost:4200/dashboard-my-active-bids.html",
						title: "My Active Bids"
					},
					{
						link: "http://localhost:4200/dashboard-post-a-task.html",
						title: "Post a Task"
					}
				]
			},
			{
				link: UrlService.INSTANCE.privateSetting,
				title: "Settings"
			}
		]
	},
	{
		link: "http://localhost:4200/#",
		title: "Pages",
		navs: [
			{
				link: "http://localhost:4200/#",
				title: "Open Street Map",
				navs: [
					{
						link: "jobs-list-layout-full-page-map-OpenStreetMap.html", title: "Full Page List + Map"
					},
					{
						link: "jobs-grid-layout-full-page-map-OpenStreetMap.html", title: "Full Page Grid + Map"
					},
					{
						link: "single-job-page-OpenStreetMap.html", title: "Job Page"
					},
					{
						link: "single-company-profile-OpenStreetMap.html", title: "Company Profile"
					},
					{
						link: "pages-contact-OpenStreetMap.html", title: "Contact"
					},
					{
						link: "jobs-list-layout-1-OpenStreetMap.html", title: "Location Autocomplete"
					}
				]
			},
			{
				link: "http://localhost:4200/pages-blog.html",
				title: "Blog"
			},
			{
				link: "http://localhost:4200/pages-pricing-plans.html",
				title: "Pricing Plans"
			},
			{
				link: "http://localhost:4200/pages-checkout-page.html",
				title: "Checkout Page"
			},
			{
				link: "http://localhost:4200/pages-invoice-template.html",
				title: "Invoice Template"
			},
			{
				link: "http://localhost:4200/pages-user-interface-elements.html",
				title: "User Interface Elements"
			},
			{
				link: "http://localhost:4200/pages-icons-cheatsheet.html",
				title: "Icons Cheatsheet"
			},
			{
				link: UrlService.INSTANCE.authSignin,
				title: "Login & Register"
			},
			{
				link: UrlService.INSTANCE.publicError404,
				title: "404 Page"
			},
			{
				link: UrlService.INSTANCE.publicContact,
				title: "Contact"
			}
		]
	}
]
