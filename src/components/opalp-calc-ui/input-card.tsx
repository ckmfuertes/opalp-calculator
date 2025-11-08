import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/modern-ui/card";
import { Button } from "@/components/modern-ui/button";
import { Input } from "@/components/modern-ui/input";
import { Label } from "@/components/modern-ui/label";
import DatePicker from "@/components/modern-ui/date-picker";
import { useState } from "react";
import { showErrorToast } from "@/services/toastServices";

export function InputCard({
  onCalculate,
}: {
  onCalculate: (data: any) => void;
}) {
  const [balance, setBalance] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!balance || !startDate || !endDate) {
      showErrorToast("Please fill in all fields.");
      return;
    }

    if (endDate <= startDate) {
      showErrorToast("End date must be later than the start date.");
      return;
    }

    onCalculate({
      balance: parseFloat(balance),
      startDate,
      endDate,
    });
  };

  const handleClear = () => {
    setBalance("");
    setStartDate(undefined);
    setEndDate(undefined);
  };

  return (
    <Card className="w-full max-w-xl bg-background-light dark:bg-background-dark">
      <CardHeader>
        <CardTitle>Opalp Details</CardTitle>
        <CardDescription>
          Simulates your balance growth with two daily trades at 1% and 85% ROI.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Current Balance */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="balance">Current Balance (USDT)</Label>
            <Input
              id="balance"
              type="number"
              placeholder="Enter your balance..."
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              className="dark:bg-input-surface-dark"
            />
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <Label>Start Date</Label>
              <DatePicker
                date={startDate}
                setDate={setStartDate}
                placeholder="Select start date"
                className="w-full"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label>End Date</Label>
              <DatePicker
                date={endDate}
                setDate={setEndDate}
                placeholder="Select end date"
                className="w-full"
                disabled={(date) => (!startDate ? false : date <= startDate)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleClear}
            >
              Clear
            </Button>
            <Button type="submit" size="sm">
              Calculate
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
