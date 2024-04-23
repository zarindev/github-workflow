import { test, expect, chromium } from "@playwright/test";
import { NavigateToHomePage } from "../pages/navigations/navigateToHomePage";
import { NavigateToTasksPage } from "../pages/navigations/navigateToTasksPage";
import { NavigateToTemplatePage } from "../pages/navigations/navigateToTemplatesPage";
import { NavigateToTrackerPage } from "../pages/navigations/navigateToTrackerPage";
import { NavigateToSettingsPage } from "../pages/navigations/navigateToSettingsPage";
import { NavigateToProfilePage } from "../pages/navigations/navigateToProfilePage";
import { NavigateToPeoplePage } from "../pages/navigations/navigateToPeoplePage";
import { NavigateToUserProfilePersonalizationPage } from "../pages/navigations/navigateToUserProfilePersonalizationPage";
import { NavigateToEmailNotificationPage } from "../pages/navigations/navigateToEmailNotificationPage";
import { NavigateToOrgDetailsPage } from "../pages/navigations/navigateToOrgDetails";
import { NavigateToOrgCustomizationPage } from "../pages/navigations/navigationToCustomization";
import { NavigateToGuestsPage } from "../pages/navigations/navigateToGuestsPage";
import { NavigateToGroupsPage } from "../pages/navigations/navigateToGroupsPage";
import { NavigateToJobTitlesPage } from "../pages/navigations/navigateToJobTitlesPage";
import { NavigateToTagsPage } from "../pages/navigations/navigateToTagsPage";
import { NavigateToEmailSettingsPage } from "../pages/navigations/navigateToEmailSettingsPage";
import { NavigateToBrandingPage } from "../pages/navigations/navigateToBrandingPage";
import { NavigateToSnippetsPage } from "../pages/navigations/navigateToSnippetsPage";
import { NavigateToOrgPersonalizationPage } from "../pages/navigations/navigateToOrgPersonalizationPage";
import { NavigateToDomainsPage } from "../pages/navigations/navigateToDomainsPage";
import { NavigateToBillingPage } from "../pages/navigations/navigateToBillingPage";
import { NavigateToIntegrationsPage } from "../pages/navigations/navigateToIntegrationsPage";
import { NavigateToCompliancePage } from "../pages/navigations/navigateToCompliancePage";
import { NavigateToCreateBtnModal } from "../pages/navigations/navigateToCreateBtnModal";


test("Navigate to the Create Button Modal", async ({page}) => {
    const navigateToCreateBtnModal = new NavigateToCreateBtnModal(page);
    await navigateToCreateBtnModal.navigateToCreateBtnModal();
});

test("Navigate to the Home Page", async ({page}) => {
    const navigateToHomePage = new NavigateToHomePage(page);
    await navigateToHomePage.navigateToHomePage();
})

test("Navigate to Tasks Page", async ({page}) => {
    const navigateToTasksPage = new NavigateToTasksPage(page);
    await navigateToTasksPage.navigateToTasksPage();
})

test("Navigate to Tracker Page", async ({page}) => {
    const navigateToTrackerPage = new NavigateToTrackerPage(page);
    await navigateToTrackerPage.navigateToTrackerPage();
})

test("Navigate to Templates Page", async ({page}) => {
    const navigateToTemplatePage = new NavigateToTemplatePage(page);
    await navigateToTemplatePage.navigateToTemplate();
})

test("Navigate to Settings Page from Sidebar", async ({page}) => {
    const navigateToSettingsPage = new NavigateToSettingsPage(page);
    await navigateToSettingsPage.navigateToSettingsPage();
})

test("Navigate to Settings Page from User Icon Popup", async ({page}) => {
    const navigateToSettingsPageUserIcon = new NavigateToSettingsPage(page);
    await navigateToSettingsPageUserIcon.navigateToSettingsPageUserPopup();
})

test("Navigate to Profile Page", async ({page}) => {
    const navigateToProfilePage = new NavigateToProfilePage(page);
    await navigateToProfilePage.navigateToProfilePage();
})

test("Navigate to User Profile Personalization Page", async ({page}) => {
    const navigateToPersonalizationPage = new NavigateToUserProfilePersonalizationPage(page);
    await navigateToPersonalizationPage.navigateToPersonalizationPage();
})

test("Navigate to Members Page from Sidebar", async ({page}) => {
    const navigateToMembersPage = new NavigateToPeoplePage(page);
    await navigateToMembersPage.navigateToPeoplePageFromSidebar();
})

test("Navigate to Members Page from Settings", async ({page}) => {
    const navigateToMembersPage = new NavigateToPeoplePage(page);
    await navigateToMembersPage.navigateToPeoplePageFromSettings();
})

test("Navigate to Email Notification Page", async ({page}) => {
    const navigateToEmailNotificationPage = new NavigateToEmailNotificationPage(page);
    await navigateToEmailNotificationPage.navigateToEmailNotificationPage();
})

test("Navigate to Organization Details Page", async ({page}) => {
    const navigateToOrganizationDetailsPage = new NavigateToOrgDetailsPage(page);
    await navigateToOrganizationDetailsPage.navigateToOrgDetailsPage();
})

test("Navigate to Organization Customization Page", async ({page}) => {
    const navigateToOrgCustomizationPage = new NavigateToOrgCustomizationPage(page);
    await navigateToOrgCustomizationPage.navigateToOrgCustomizationPage();
})

test("Navigate to Organization Guests Page", async ({page}) => {
    const navigateToOrgGuestsPage = new NavigateToGuestsPage(page);
    await navigateToOrgGuestsPage.navigateToGuestsPage();
})

test("Navigate to Organization Groups Page", async ({page}) =>{
    const navigateToOrgGroupsPage = new NavigateToGroupsPage(page);
    await navigateToOrgGroupsPage.navigateToGroupsPage();
})

test("Navigate to Organization Job Titles Page", async ({page}) => {
    const navigateToOrgJobTitlesPage = new NavigateToJobTitlesPage(page);
    await navigateToOrgJobTitlesPage.navigateToJobTitlesPage();
})

test("Navigate to Organization Tags Page", async ({page}) => {
    const navigateToOrgTagsPage = new NavigateToTagsPage(page);
    await navigateToOrgTagsPage.navigateToTagsPage();
})

test("Navigate to Organization Email Settings Page", async ({page}) => {
    const navigateToOrgEmailSettingsPage = new NavigateToEmailSettingsPage(page);
    await navigateToOrgEmailSettingsPage.navigateToEmailSettingsPage();
})

test("Navigate to Organization Branding Page", async ({page}) => {
    const navigateToBrandingPage = new NavigateToBrandingPage(page);
    await navigateToBrandingPage.navigateToBrandingPage();
})

test("Navigate to Organization Snippets Page", async ({page}) => {
    const navigateToSnippetsPage = new NavigateToSnippetsPage(page);
    await navigateToSnippetsPage.navigateToSnippetsPage();
})

test("Navigate to Organization Personalization Page", async ({page}) => {
    const navigateToOrgPersonalizationPage = new NavigateToOrgPersonalizationPage(page);
    await navigateToOrgPersonalizationPage.navigateToOrgPersonalizationPage();
})

test("Navigate to Organization Domains Page", async ({page}) => {
    const navigateToDomainsPage = new NavigateToDomainsPage(page);
    await navigateToDomainsPage.navigateToDomainsPage();
})

test("Navigate to Billing Page", async ({page}) => {
    const navigateToBillingPage = new NavigateToBillingPage(page);
    await navigateToBillingPage.navigateToBillingPage();
})

test("Navigate to Integrations Page", async ({page}) => {
    const navigateToIntegrationsPage = new NavigateToIntegrationsPage(page);
    await navigateToIntegrationsPage.navigateToIntegrationsPage();
})

test("Navigate to Compliance Page", async ({page}) => {
    const navigateToCompliancePage = new NavigateToCompliancePage(page);
    await navigateToCompliancePage.navigateToCompliancePage();
})