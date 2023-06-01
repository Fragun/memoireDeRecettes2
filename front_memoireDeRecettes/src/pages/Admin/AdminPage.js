import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { gapi } from "gapi-script";

export default function AdminPage() {
  const { user } = useContext(AuthContext);
  console.log(user);

  // Replace with your view ID.
  var VIEW_ID = 291092304 ;

  useEffect(() => {
    // Load the Google Analytics Reporting API script
    gapi.load("client:auth2", initGoogleAnalytics);
  }, []);

  function initGoogleAnalytics() {
    gapi.client
      .init({
        apiKey:  process.env.REACT_APP_GOOGLE_API_KEY,
        clientId: "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",
        discoveryDocs: [
          "https://analyticsreporting.googleapis.com/$discovery/rest?version=v4",
        ],
        scope: "https://www.googleapis.com/auth/analytics.readonly",
      })
      .then(() => {
        // Execute the queryReports function after initialization
        queryReports();
      });
  }

  // Query the API and print the results to the page.
  function queryReports() {
    gapi.client.analyticsreporting.reports
      .batchGet({
        requestBody: {
          reportRequests: [
            {
              viewId: VIEW_ID,
              dateRanges: [
                {
                  startDate: "7daysAgo",
                  endDate: "today",
                },
              ],
              metrics: [
                {
                  expression: "ga:sessions",
                },
              ],
            },
          ],
        },
      })
      .then(
        (response) => {
          displayResults(response.result);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  function displayResults(result) {
    var formattedJson = JSON.stringify(result, null, 2);
    document.getElementById("query-output").value = formattedJson;
  }

  return (
    <>
      {user[0].USER_ROLE === "ADMIN" && (
        <>
          <h1>Hello Analytics Reporting API V4</h1>
          <p className="g-signin2" data-onsuccess="queryReports"></p>
          <textarea cols="80" rows="20" id="query-output"></textarea>
        </>
      )}
    </>
  );
}
