// https://www.terraform.io/docs/providers/kubernetes/r/deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Wait for the rollout of the deployment to complete. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#wait_for_rollout Deployment#wait_for_rollout}
  */
  readonly waitForRollout?: boolean;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#metadata Deployment#metadata}
  */
  readonly metadata: DeploymentMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#spec Deployment#spec}
  */
  readonly spec: DeploymentSpec[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeouts Deployment#timeouts}
  */
  readonly timeouts?: DeploymentTimeouts;
}
export interface DeploymentMetadata {
  /**
  * An unstructured key value map stored with the deployment that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#annotations Deployment#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#generate_name Deployment#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the deployment. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#labels Deployment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the deployment, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the deployment must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentMetadataToTerraform(struct?: DeploymentMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DeploymentSpecSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecSelectorMatchExpressions[];
}

function deploymentSpecSelectorToTerraform(struct?: DeploymentSpecSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecStrategyRollingUpdate {
  /**
  * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new RC can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new RC can be scaled up further, ensuring that total number of pods running at any time during the update is atmost 130% of desired pods.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#max_surge Deployment#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old RC can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old RC can be scaled down further, followed by scaling up the new RC, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#max_unavailable Deployment#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

function deploymentSpecStrategyRollingUpdateToTerraform(struct?: DeploymentSpecStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}

export interface DeploymentSpecStrategy {
  /**
  * Type of deployment. Can be 'Recreate' or 'RollingUpdate'. Default is RollingUpdate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
  /**
  * rolling_update block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rolling_update Deployment#rolling_update}
  */
  readonly rollingUpdate?: DeploymentSpecStrategyRollingUpdate[];
}

function deploymentSpecStrategyToTerraform(struct?: DeploymentSpecStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    rolling_update: cdktf.listMapper(deploymentSpecStrategyRollingUpdateToTerraform)(struct!.rollingUpdate),
  }
}

export interface DeploymentSpecTemplateMetadata {
  /**
  * An unstructured key value map stored with the pod that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#annotations Deployment#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#generate_name Deployment#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the pod. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#labels Deployment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the pod, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the pod must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateMetadataToTerraform(struct?: DeploymentSpecTemplateMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight is in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#weight Deployment#weight}
  */
  readonly weight: number;
  /**
  * preference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#preference Deployment#preference}
  */
  readonly preference: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform)(struct!.preference),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_selector_term Deployment#node_selector_term}
  */
  readonly nodeSelectorTerm?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_selector_term: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export interface DeploymentSpecTemplateSpecAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#preferred_during_scheduling_ignored_during_execution Deployment#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#required_during_scheduling_ignored_during_execution Deployment#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function deploymentSpecTemplateSpecAffinityNodeAffinityToTerraform(struct?: DeploymentSpecTemplateSpecAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespaces Deployment#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#weight Deployment#weight}
  */
  readonly weight: number;
  /**
  * pod_affinity_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pod_affinity_term Deployment#pod_affinity_term}
  */
  readonly podAffinityTerm: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespaces Deployment#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#preferred_during_scheduling_ignored_during_execution Deployment#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#required_during_scheduling_ignored_during_execution Deployment#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function deploymentSpecTemplateSpecAffinityPodAffinityToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespaces Deployment#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#weight Deployment#weight}
  */
  readonly weight: number;
  /**
  * pod_affinity_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pod_affinity_term Deployment#pod_affinity_term}
  */
  readonly podAffinityTerm: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespaces Deployment#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface DeploymentSpecTemplateSpecAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#preferred_during_scheduling_ignored_during_execution Deployment#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#required_during_scheduling_ignored_during_execution Deployment#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DeploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function deploymentSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct?: DeploymentSpecTemplateSpecAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface DeploymentSpecTemplateSpecAffinity {
  /**
  * node_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_affinity Deployment#node_affinity}
  */
  readonly nodeAffinity?: DeploymentSpecTemplateSpecAffinityNodeAffinity[];
  /**
  * pod_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pod_affinity Deployment#pod_affinity}
  */
  readonly podAffinity?: DeploymentSpecTemplateSpecAffinityPodAffinity[];
  /**
  * pod_anti_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pod_anti_affinity Deployment#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DeploymentSpecTemplateSpecAffinityPodAntiAffinity[];
}

function deploymentSpecTemplateSpecAffinityToTerraform(struct?: DeploymentSpecTemplateSpecAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_affinity: cdktf.listMapper(deploymentSpecTemplateSpecAffinityNodeAffinityToTerraform)(struct!.nodeAffinity),
    pod_affinity: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAffinityToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.listMapper(deploymentSpecTemplateSpecAffinityPodAntiAffinityToTerraform)(struct!.podAntiAffinity),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
}

function deploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#api_version Deployment#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_path Deployment#field_path}
  */
  readonly fieldPath?: string;
}

function deploymentSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_name Deployment#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#divisor Deployment#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource Deployment#resource}
  */
  readonly resource: string;
}

function deploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
}

function deploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnvValueFrom {
  /**
  * config_map_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map_key_ref Deployment#config_map_key_ref}
  */
  readonly configMapKeyRef?: DeploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef[];
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_ref Deployment#field_ref}
  */
  readonly fieldRef?: DeploymentSpecTemplateSpecContainerEnvValueFromFieldRef[];
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource_field_ref Deployment#resource_field_ref}
  */
  readonly resourceFieldRef?: DeploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRef[];
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_key_ref Deployment#secret_key_ref}
  */
  readonly secretKeyRef?: DeploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRef[];
}

function deploymentSpecTemplateSpecContainerEnvValueFromToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
  /**
  * value_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value_from Deployment#value_from}
  */
  readonly valueFrom?: DeploymentSpecTemplateSpecContainerEnvValueFrom[];
}

function deploymentSpecTemplateSpecContainerEnvToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
}

function deploymentSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
}

function deploymentSpecTemplateSpecContainerEnvFromSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface DeploymentSpecTemplateSpecContainerEnvFrom {
  /**
  * An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#prefix Deployment#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map_ref Deployment#config_map_ref}
  */
  readonly configMapRef?: DeploymentSpecTemplateSpecContainerEnvFromConfigMapRef[];
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecContainerEnvFromSecretRef[];
}

function deploymentSpecTemplateSpecContainerEnvFromToTerraform(struct?: DeploymentSpecTemplateSpecContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePostStartExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePostStart {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerLifecyclePostStartExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerLifecyclePostStartHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocket[];
}

function deploymentSpecTemplateSpecContainerLifecyclePostStartToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePreStopExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecyclePreStop {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerLifecyclePreStopExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerLifecyclePreStopHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocket[];
}

function deploymentSpecTemplateSpecContainerLifecyclePreStopToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecContainerLifecycle {
  /**
  * post_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#post_start Deployment#post_start}
  */
  readonly postStart?: DeploymentSpecTemplateSpecContainerLifecyclePostStart[];
  /**
  * pre_stop block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pre_stop Deployment#pre_stop}
  */
  readonly preStop?: DeploymentSpecTemplateSpecContainerLifecyclePreStop[];
}

function deploymentSpecTemplateSpecContainerLifecycleToTerraform(struct?: DeploymentSpecTemplateSpecContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface DeploymentSpecTemplateSpecContainerLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerLivenessProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecContainerLivenessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerLivenessProbeExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerLivenessProbeHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerLivenessProbeTcpSocket[];
}

function deploymentSpecTemplateSpecContainerLivenessProbeToTerraform(struct?: DeploymentSpecTemplateSpecContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(deploymentSpecTemplateSpecContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecContainerPort {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_port Deployment#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_ip Deployment#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_port Deployment#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP or TCP. Defaults to "TCP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#protocol Deployment#protocol}
  */
  readonly protocol?: string;
}

function deploymentSpecTemplateSpecContainerPortToTerraform(struct?: DeploymentSpecTemplateSpecContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface DeploymentSpecTemplateSpecContainerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerReadinessProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecContainerReadinessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerReadinessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerReadinessProbeExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerReadinessProbeHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerReadinessProbeTcpSocket[];
}

function deploymentSpecTemplateSpecContainerReadinessProbeToTerraform(struct?: DeploymentSpecTemplateSpecContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(deploymentSpecTemplateSpecContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecContainerResources {
  /**
  * Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#limits Deployment#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#requests Deployment#requests}
  */
  readonly requests?: { [key: string]: string };
}

function deploymentSpecTemplateSpecContainerResourcesToTerraform(struct?: DeploymentSpecTemplateSpecContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export interface DeploymentSpecTemplateSpecContainerSecurityContextCapabilities {
  /**
  * Added capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#add Deployment#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#drop Deployment#drop}
  */
  readonly drop?: string[];
}

function deploymentSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform(struct?: DeploymentSpecTemplateSpecContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#level Deployment#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#role Deployment#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
}

function deploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface DeploymentSpecTemplateSpecContainerSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#allow_privilege_escalation Deployment#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#privileged Deployment#privileged}
  */
  readonly privileged?: boolean;
  /**
  * Whether this container has a read-only root filesystem. Default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only_root_filesystem Deployment#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_group Deployment#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_non_root Deployment#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_user Deployment#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#capabilities Deployment#capabilities}
  */
  readonly capabilities?: DeploymentSpecTemplateSpecContainerSecurityContextCapabilities[];
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#se_linux_options Deployment#se_linux_options}
  */
  readonly seLinuxOptions?: DeploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptions[];
}

function deploymentSpecTemplateSpecContainerSecurityContextToTerraform(struct?: DeploymentSpecTemplateSpecContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(deploymentSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(deploymentSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface DeploymentSpecTemplateSpecContainerStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecContainerStartupProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecContainerStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecContainerStartupProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecContainerStartupProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecContainerStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecContainerStartupProbeExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecContainerStartupProbeHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecContainerStartupProbeTcpSocket[];
}

function deploymentSpecTemplateSpecContainerStartupProbeToTerraform(struct?: DeploymentSpecTemplateSpecContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(deploymentSpecTemplateSpecContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecContainerVolumeMount {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mount_path Deployment#mount_path}
  */
  readonly mountPath: string;
  /**
  * Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mount_propagation Deployment#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#sub_path Deployment#sub_path}
  */
  readonly subPath?: string;
}

function deploymentSpecTemplateSpecContainerVolumeMountToTerraform(struct?: DeploymentSpecTemplateSpecContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface DeploymentSpecTemplateSpecContainer {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#args Deployment#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. More info: http://kubernetes.io/docs/user-guide/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image Deployment#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image_pull_policy Deployment#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#stdin Deployment#stdin}
  */
  readonly stdin?: boolean;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#stdin_once Deployment#stdin_once}
  */
  readonly stdinOnce?: boolean;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_message_path Deployment#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_message_policy Deployment#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tty Deployment#tty}
  */
  readonly tty?: boolean;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#working_dir Deployment#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#env Deployment#env}
  */
  readonly env?: DeploymentSpecTemplateSpecContainerEnv[];
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#env_from Deployment#env_from}
  */
  readonly envFrom?: DeploymentSpecTemplateSpecContainerEnvFrom[];
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#lifecycle Deployment#lifecycle}
  */
  readonly lifecycle?: DeploymentSpecTemplateSpecContainerLifecycle[];
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#liveness_probe Deployment#liveness_probe}
  */
  readonly livenessProbe?: DeploymentSpecTemplateSpecContainerLivenessProbe[];
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: DeploymentSpecTemplateSpecContainerPort[];
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#readiness_probe Deployment#readiness_probe}
  */
  readonly readinessProbe?: DeploymentSpecTemplateSpecContainerReadinessProbe[];
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resources Deployment#resources}
  */
  readonly resources?: DeploymentSpecTemplateSpecContainerResources[];
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#security_context Deployment#security_context}
  */
  readonly securityContext?: DeploymentSpecTemplateSpecContainerSecurityContext[];
  /**
  * startup_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#startup_probe Deployment#startup_probe}
  */
  readonly startupProbe?: DeploymentSpecTemplateSpecContainerStartupProbe[];
  /**
  * volume_mount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_mount Deployment#volume_mount}
  */
  readonly volumeMount?: DeploymentSpecTemplateSpecContainerVolumeMount[];
}

function deploymentSpecTemplateSpecContainerToTerraform(struct?: DeploymentSpecTemplateSpecContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(deploymentSpecTemplateSpecContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(deploymentSpecTemplateSpecContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(deploymentSpecTemplateSpecContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(deploymentSpecTemplateSpecContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(deploymentSpecTemplateSpecContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(deploymentSpecTemplateSpecContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(deploymentSpecTemplateSpecContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(deploymentSpecTemplateSpecContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(deploymentSpecTemplateSpecContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface DeploymentSpecTemplateSpecDnsConfigOption {
  /**
  * Name of the option.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Value of the option. Optional: Defaults to empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecDnsConfigOptionToTerraform(struct?: DeploymentSpecTemplateSpecDnsConfigOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecDnsConfig {
  /**
  * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#nameservers Deployment#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#searches Deployment#searches}
  */
  readonly searches?: string[];
  /**
  * option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#option Deployment#option}
  */
  readonly option?: DeploymentSpecTemplateSpecDnsConfigOption[];
}

function deploymentSpecTemplateSpecDnsConfigToTerraform(struct?: DeploymentSpecTemplateSpecDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    searches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searches),
    option: cdktf.listMapper(deploymentSpecTemplateSpecDnsConfigOptionToTerraform)(struct!.option),
  }
}

export interface DeploymentSpecTemplateSpecHostAliases {
  /**
  * Hostnames for the IP address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#hostnames Deployment#hostnames}
  */
  readonly hostnames: string[];
  /**
  * IP address of the host file entry.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#ip Deployment#ip}
  */
  readonly ip: string;
}

function deploymentSpecTemplateSpecHostAliasesToTerraform(struct?: DeploymentSpecTemplateSpecHostAliases): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface DeploymentSpecTemplateSpecImagePullSecrets {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
}

function deploymentSpecTemplateSpecImagePullSecretsToTerraform(struct?: DeploymentSpecTemplateSpecImagePullSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#api_version Deployment#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_path Deployment#field_path}
  */
  readonly fieldPath?: string;
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_name Deployment#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#divisor Deployment#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource Deployment#resource}
  */
  readonly resource: string;
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvValueFrom {
  /**
  * config_map_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map_key_ref Deployment#config_map_key_ref}
  */
  readonly configMapKeyRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef[];
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_ref Deployment#field_ref}
  */
  readonly fieldRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromFieldRef[];
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource_field_ref Deployment#resource_field_ref}
  */
  readonly resourceFieldRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef[];
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_key_ref Deployment#secret_key_ref}
  */
  readonly secretKeyRef?: DeploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef[];
}

function deploymentSpecTemplateSpecInitContainerEnvValueFromToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
  /**
  * value_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value_from Deployment#value_from}
  */
  readonly valueFrom?: DeploymentSpecTemplateSpecInitContainerEnvValueFrom[];
}

function deploymentSpecTemplateSpecInitContainerEnvToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
}

function deploymentSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
}

function deploymentSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerEnvFrom {
  /**
  * An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#prefix Deployment#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map_ref Deployment#config_map_ref}
  */
  readonly configMapRef?: DeploymentSpecTemplateSpecInitContainerEnvFromConfigMapRef[];
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecInitContainerEnvFromSecretRef[];
}

function deploymentSpecTemplateSpecInitContainerEnvFromToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStartExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePostStart {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePostStartToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStopExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecyclePreStop {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerLifecyclePreStopToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLifecycle {
  /**
  * post_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#post_start Deployment#post_start}
  */
  readonly postStart?: DeploymentSpecTemplateSpecInitContainerLifecyclePostStart[];
  /**
  * pre_stop block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pre_stop Deployment#pre_stop}
  */
  readonly preStop?: DeploymentSpecTemplateSpecInitContainerLifecyclePreStop[];
}

function deploymentSpecTemplateSpecInitContainerLifecycleToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerLivenessProbeExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerLivenessProbeHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerLivenessProbeToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerPort {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_port Deployment#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_ip Deployment#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_port Deployment#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP or TCP. Defaults to "TCP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#protocol Deployment#protocol}
  */
  readonly protocol?: string;
}

function deploymentSpecTemplateSpecInitContainerPortToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerReadinessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerReadinessProbeExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerReadinessProbeHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerReadinessProbeToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerResources {
  /**
  * Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#limits Deployment#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#requests Deployment#requests}
  */
  readonly requests?: { [key: string]: string };
}

function deploymentSpecTemplateSpecInitContainerResourcesToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilities {
  /**
  * Added capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#add Deployment#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#drop Deployment#drop}
  */
  readonly drop?: string[];
}

function deploymentSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#level Deployment#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#role Deployment#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
}

function deploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#allow_privilege_escalation Deployment#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#privileged Deployment#privileged}
  */
  readonly privileged?: boolean;
  /**
  * Whether this container has a read-only root filesystem. Default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only_root_filesystem Deployment#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_group Deployment#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_non_root Deployment#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_user Deployment#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#capabilities Deployment#capabilities}
  */
  readonly capabilities?: DeploymentSpecTemplateSpecInitContainerSecurityContextCapabilities[];
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#se_linux_options Deployment#se_linux_options}
  */
  readonly seLinuxOptions?: DeploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions[];
}

function deploymentSpecTemplateSpecInitContainerSecurityContextToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
}

function deploymentSpecTemplateSpecInitContainerStartupProbeExecToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host Deployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#scheme Deployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_header Deployment#http_header}
  */
  readonly httpHeader?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[];
}

function deploymentSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerStartupProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port: string;
}

function deploymentSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#failure_threshold Deployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#initial_delay_seconds Deployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#period_seconds Deployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#success_threshold Deployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#timeout_seconds Deployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#exec Deployment#exec}
  */
  readonly exec?: DeploymentSpecTemplateSpecInitContainerStartupProbeExec[];
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#http_get Deployment#http_get}
  */
  readonly httpGet?: DeploymentSpecTemplateSpecInitContainerStartupProbeHttpGet[];
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tcp_socket Deployment#tcp_socket}
  */
  readonly tcpSocket?: DeploymentSpecTemplateSpecInitContainerStartupProbeTcpSocket[];
}

function deploymentSpecTemplateSpecInitContainerStartupProbeToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface DeploymentSpecTemplateSpecInitContainerVolumeMount {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mount_path Deployment#mount_path}
  */
  readonly mountPath: string;
  /**
  * Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mount_propagation Deployment#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#sub_path Deployment#sub_path}
  */
  readonly subPath?: string;
}

function deploymentSpecTemplateSpecInitContainerVolumeMountToTerraform(struct?: DeploymentSpecTemplateSpecInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface DeploymentSpecTemplateSpecInitContainer {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#args Deployment#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#command Deployment#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. More info: http://kubernetes.io/docs/user-guide/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image Deployment#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image_pull_policy Deployment#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#stdin Deployment#stdin}
  */
  readonly stdin?: boolean;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#stdin_once Deployment#stdin_once}
  */
  readonly stdinOnce?: boolean;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_message_path Deployment#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_message_policy Deployment#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#tty Deployment#tty}
  */
  readonly tty?: boolean;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#working_dir Deployment#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#env Deployment#env}
  */
  readonly env?: DeploymentSpecTemplateSpecInitContainerEnv[];
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#env_from Deployment#env_from}
  */
  readonly envFrom?: DeploymentSpecTemplateSpecInitContainerEnvFrom[];
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#lifecycle Deployment#lifecycle}
  */
  readonly lifecycle?: DeploymentSpecTemplateSpecInitContainerLifecycle[];
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#liveness_probe Deployment#liveness_probe}
  */
  readonly livenessProbe?: DeploymentSpecTemplateSpecInitContainerLivenessProbe[];
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#port Deployment#port}
  */
  readonly port?: DeploymentSpecTemplateSpecInitContainerPort[];
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#readiness_probe Deployment#readiness_probe}
  */
  readonly readinessProbe?: DeploymentSpecTemplateSpecInitContainerReadinessProbe[];
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resources Deployment#resources}
  */
  readonly resources?: DeploymentSpecTemplateSpecInitContainerResources[];
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#security_context Deployment#security_context}
  */
  readonly securityContext?: DeploymentSpecTemplateSpecInitContainerSecurityContext[];
  /**
  * startup_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#startup_probe Deployment#startup_probe}
  */
  readonly startupProbe?: DeploymentSpecTemplateSpecInitContainerStartupProbe[];
  /**
  * volume_mount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_mount Deployment#volume_mount}
  */
  readonly volumeMount?: DeploymentSpecTemplateSpecInitContainerVolumeMount[];
}

function deploymentSpecTemplateSpecInitContainerToTerraform(struct?: DeploymentSpecTemplateSpecInitContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface DeploymentSpecTemplateSpecReadinessGate {
  /**
  * refers to a condition in the pod's condition list with matching type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#condition_type Deployment#condition_type}
  */
  readonly conditionType: string;
}

function deploymentSpecTemplateSpecReadinessGateToTerraform(struct?: DeploymentSpecTemplateSpecReadinessGate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}

export interface DeploymentSpecTemplateSpecSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#level Deployment#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#role Deployment#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
}

function deploymentSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct?: DeploymentSpecTemplateSpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface DeploymentSpecTemplateSpecSecurityContextSysctl {
  /**
  * Name of a property to set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name: string;
  /**
  * Value of a property to set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value: string;
}

function deploymentSpecTemplateSpecSecurityContextSysctlToTerraform(struct?: DeploymentSpecTemplateSpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_group Deployment#fs_group}
  */
  readonly fsGroup?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_group Deployment#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_non_root Deployment#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#run_as_user Deployment#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID. If unspecified, no groups will be added to any container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#supplemental_groups Deployment#supplemental_groups}
  */
  readonly supplementalGroups?: number[];
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#se_linux_options Deployment#se_linux_options}
  */
  readonly seLinuxOptions?: DeploymentSpecTemplateSpecSecurityContextSeLinuxOptions[];
  /**
  * sysctl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#sysctl Deployment#sysctl}
  */
  readonly sysctl?: DeploymentSpecTemplateSpecSecurityContextSysctl[];
}

function deploymentSpecTemplateSpecSecurityContextToTerraform(struct?: DeploymentSpecTemplateSpecSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_group: cdktf.stringToTerraform(struct!.fsGroup),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    supplemental_groups: cdktf.listMapper(cdktf.numberToTerraform)(struct!.supplementalGroups),
    se_linux_options: cdktf.listMapper(deploymentSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
    sysctl: cdktf.listMapper(deploymentSpecTemplateSpecSecurityContextSysctlToTerraform)(struct!.sysctl),
  }
}

export interface DeploymentSpecTemplateSpecToleration {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#effect Deployment#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#toleration_seconds Deployment#toleration_seconds}
  */
  readonly tolerationSeconds?: string;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#value Deployment#value}
  */
  readonly value?: string;
}

function deploymentSpecTemplateSpecTolerationToTerraform(struct?: DeploymentSpecTemplateSpecToleration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.stringToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#operator Deployment#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#values Deployment#values}
  */
  readonly values?: string[];
}

function deploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform(struct?: DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_labels Deployment#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#match_expressions Deployment#match_expressions}
  */
  readonly matchExpressions?: DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions[];
}

function deploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform(struct?: DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(deploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DeploymentSpecTemplateSpecTopologySpreadConstraint {
  /**
  * describes the degree to which pods may be unevenly distributed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#max_skew Deployment#max_skew}
  */
  readonly maxSkew?: number;
  /**
  * the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_key Deployment#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * indicates how to deal with a pod if it doesn't satisfy the spread constraint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#when_unsatisfiable Deployment#when_unsatisfiable}
  */
  readonly whenUnsatisfiable?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#label_selector Deployment#label_selector}
  */
  readonly labelSelector?: DeploymentSpecTemplateSpecTopologySpreadConstraintLabelSelector[];
}

function deploymentSpecTemplateSpecTopologySpreadConstraintToTerraform(struct?: DeploymentSpecTemplateSpecTopologySpreadConstraint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
    label_selector: cdktf.listMapper(deploymentSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface DeploymentSpecTemplateSpecVolumeAwsElasticBlockStore {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#partition Deployment#partition}
  */
  readonly partition?: number;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_id Deployment#volume_id}
  */
  readonly volumeId: string;
}

function deploymentSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform(struct?: DeploymentSpecTemplateSpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface DeploymentSpecTemplateSpecVolumeAzureDisk {
  /**
  * Host Caching mode: None, Read Only, Read Write.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#caching_mode Deployment#caching_mode}
  */
  readonly cachingMode: string;
  /**
  * The URI the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#data_disk_uri Deployment#data_disk_uri}
  */
  readonly dataDiskUri: string;
  /**
  * The Name of the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#disk_name Deployment#disk_name}
  */
  readonly diskName: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#kind Deployment#kind}
  */
  readonly kind?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
}

function deploymentSpecTemplateSpecVolumeAzureDiskToTerraform(struct?: DeploymentSpecTemplateSpecVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    data_disk_uri: cdktf.stringToTerraform(struct!.dataDiskUri),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface DeploymentSpecTemplateSpecVolumeAzureFile {
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * The name of secret that contains Azure Storage Account Name and Key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_name Deployment#secret_name}
  */
  readonly secretName: string;
  /**
  * The namespace of the secret that contains Azure Storage Account Name and Key. For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_namespace Deployment#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Share Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#share_name Deployment#share_name}
  */
  readonly shareName: string;
}

function deploymentSpecTemplateSpecVolumeAzureFileToTerraform(struct?: DeploymentSpecTemplateSpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}

export interface DeploymentSpecTemplateSpecVolumeCephFsSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCephFsSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DeploymentSpecTemplateSpecVolumeCephFs {
  /**
  * Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#monitors Deployment#monitors}
  */
  readonly monitors: string[];
  /**
  * Used as the mounted root, rather than the full Ceph tree, default is /
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_file Deployment#secret_file}
  */
  readonly secretFile?: string;
  /**
  * User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecVolumeCephFsSecretRef[];
}

function deploymentSpecTemplateSpecVolumeCephFsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    user: cdktf.stringToTerraform(struct!.user),
    secret_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeCephFsSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface DeploymentSpecTemplateSpecVolumeCinder {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_id Deployment#volume_id}
  */
  readonly volumeId: string;
}

function deploymentSpecTemplateSpecVolumeCinderToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCinder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface DeploymentSpecTemplateSpecVolumeConfigMapItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeConfigMapItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeConfigMap {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#default_mode Deployment#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the ConfigMap or its keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeConfigMapItems[];
}

function deploymentSpecTemplateSpecVolumeConfigMapToTerraform(struct?: DeploymentSpecTemplateSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DeploymentSpecTemplateSpecVolumeCsi {
  /**
  * the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#driver Deployment#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Attributes of the volume to publish.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_attributes Deployment#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
  /**
  * A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_handle Deployment#volume_handle}
  */
  readonly volumeHandle: string;
  /**
  * controller_expand_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#controller_expand_secret_ref Deployment#controller_expand_secret_ref}
  */
  readonly controllerExpandSecretRef?: DeploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRef[];
  /**
  * controller_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#controller_publish_secret_ref Deployment#controller_publish_secret_ref}
  */
  readonly controllerPublishSecretRef?: DeploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRef[];
  /**
  * node_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_publish_secret_ref Deployment#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: DeploymentSpecTemplateSpecVolumeCsiNodePublishSecretRef[];
  /**
  * node_stage_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_stage_secret_ref Deployment#node_stage_secret_ref}
  */
  readonly nodeStageSecretRef?: DeploymentSpecTemplateSpecVolumeCsiNodeStageSecretRef[];
}

function deploymentSpecTemplateSpecVolumeCsiToTerraform(struct?: DeploymentSpecTemplateSpecVolumeCsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.volumeAttributes),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
    controller_expand_secret_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform)(struct!.controllerExpandSecretRef),
    controller_publish_secret_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform)(struct!.controllerPublishSecretRef),
    node_publish_secret_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform)(struct!.nodePublishSecretRef),
    node_stage_secret_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform)(struct!.nodeStageSecretRef),
  }
}

export interface DeploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#api_version Deployment#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_path Deployment#field_path}
  */
  readonly fieldPath?: string;
}

function deploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface DeploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_name Deployment#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#divisor Deployment#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource Deployment#resource}
  */
  readonly resource: string;
}

function deploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface DeploymentSpecTemplateSpecVolumeDownwardApiItems {
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_ref Deployment#field_ref}
  */
  readonly fieldRef: DeploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRef[];
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource_field_ref Deployment#resource_field_ref}
  */
  readonly resourceFieldRef?: DeploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef[];
}

function deploymentSpecTemplateSpecVolumeDownwardApiItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface DeploymentSpecTemplateSpecVolumeDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#default_mode Deployment#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeDownwardApiItems[];
}

function deploymentSpecTemplateSpecVolumeDownwardApiToTerraform(struct?: DeploymentSpecTemplateSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface DeploymentSpecTemplateSpecVolumeEmptyDir {
  /**
  * What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#medium Deployment#medium}
  */
  readonly medium?: string;
  /**
  * Total amount of local storage required for this EmptyDir volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#size_limit Deployment#size_limit}
  */
  readonly sizeLimit?: string;
}

function deploymentSpecTemplateSpecVolumeEmptyDirToTerraform(struct?: DeploymentSpecTemplateSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}

export interface DeploymentSpecTemplateSpecVolumeFc {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * FC target lun number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#lun Deployment#lun}
  */
  readonly lun: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * FC target worldwide names (WWNs)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#target_ww_ns Deployment#target_ww_ns}
  */
  readonly targetWwNs: string[];
}

function deploymentSpecTemplateSpecVolumeFcToTerraform(struct?: DeploymentSpecTemplateSpecVolumeFc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetWwNs),
  }
}

export interface DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DeploymentSpecTemplateSpecVolumeFlexVolume {
  /**
  * Driver is the name of the driver to use for this volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#driver Deployment#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Extra command options if any.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#options Deployment#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecVolumeFlexVolumeSecretRef[];
}

function deploymentSpecTemplateSpecVolumeFlexVolumeToTerraform(struct?: DeploymentSpecTemplateSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface DeploymentSpecTemplateSpecVolumeFlocker {
  /**
  * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#dataset_name Deployment#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * UUID of the dataset. This is unique identifier of a Flocker dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#dataset_uuid Deployment#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

function deploymentSpecTemplateSpecVolumeFlockerToTerraform(struct?: DeploymentSpecTemplateSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export interface DeploymentSpecTemplateSpecVolumeGcePersistentDisk {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#partition Deployment#partition}
  */
  readonly partition?: number;
  /**
  * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pd_name Deployment#pd_name}
  */
  readonly pdName: string;
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
}

function deploymentSpecTemplateSpecVolumeGcePersistentDiskToTerraform(struct?: DeploymentSpecTemplateSpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface DeploymentSpecTemplateSpecVolumeGitRepo {
  /**
  * Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#directory Deployment#directory}
  */
  readonly directory?: string;
  /**
  * Repository URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#repository Deployment#repository}
  */
  readonly repository?: string;
  /**
  * Commit hash for the specified revision.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#revision Deployment#revision}
  */
  readonly revision?: string;
}

function deploymentSpecTemplateSpecVolumeGitRepoToTerraform(struct?: DeploymentSpecTemplateSpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}

export interface DeploymentSpecTemplateSpecVolumeGlusterfs {
  /**
  * The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#endpoints_name Deployment#endpoints_name}
  */
  readonly endpointsName: string;
  /**
  * The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
  /**
  * Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
}

function deploymentSpecTemplateSpecVolumeGlusterfsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoints_name: cdktf.stringToTerraform(struct!.endpointsName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface DeploymentSpecTemplateSpecVolumeHostPath {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
  /**
  * Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#type Deployment#type}
  */
  readonly type?: string;
}

function deploymentSpecTemplateSpecVolumeHostPathToTerraform(struct?: DeploymentSpecTemplateSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface DeploymentSpecTemplateSpecVolumeIscsi {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Target iSCSI Qualified Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#iqn Deployment#iqn}
  */
  readonly iqn: string;
  /**
  * iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#iscsi_interface Deployment#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * iSCSI target lun number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#lun Deployment#lun}
  */
  readonly lun?: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#target_portal Deployment#target_portal}
  */
  readonly targetPortal: string;
}

function deploymentSpecTemplateSpecVolumeIscsiToTerraform(struct?: DeploymentSpecTemplateSpecVolumeIscsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}

export interface DeploymentSpecTemplateSpecVolumeLocal {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeLocalToTerraform(struct?: DeploymentSpecTemplateSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeNfs {
  /**
  * Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
  /**
  * Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#server Deployment#server}
  */
  readonly server: string;
}

function deploymentSpecTemplateSpecVolumeNfsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeNfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}

export interface DeploymentSpecTemplateSpecVolumePersistentVolumeClaim {
  /**
  * ClaimName is the name of a PersistentVolumeClaim in the same 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#claim_name Deployment#claim_name}
  */
  readonly claimName?: string;
  /**
  * Will force the ReadOnly setting in VolumeMounts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
}

function deploymentSpecTemplateSpecVolumePersistentVolumeClaimToTerraform(struct?: DeploymentSpecTemplateSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface DeploymentSpecTemplateSpecVolumePhotonPersistentDisk {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * ID that identifies Photon Controller persistent disk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#pd_id Deployment#pd_id}
  */
  readonly pdId: string;
}

function deploymentSpecTemplateSpecVolumePhotonPersistentDiskToTerraform(struct?: DeploymentSpecTemplateSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMap {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the ConfigMap or it's keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItems[];
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#api_version Deployment#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_path Deployment#field_path}
  */
  readonly fieldPath?: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container_name Deployment#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#divisor Deployment#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource Deployment#resource}
  */
  readonly resource: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems {
  /**
  * Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#field_ref Deployment#field_ref}
  */
  readonly fieldRef?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef[];
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#resource_field_ref Deployment#resource_field_ref}
  */
  readonly resourceFieldRef?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef[];
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApi {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[];
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesSecretItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesSecret {
  /**
  * Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the Secret or it's keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeProjectedSourcesSecretItems[];
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform)(struct!.items),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken {
  /**
  * Audience is the intended audience of the token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#audience Deployment#audience}
  */
  readonly audience?: string;
  /**
  * ExpirationSeconds is the expected duration of validity of the service account token. It defaults to 1 hour and must be at least 10 minutes (600 seconds).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#expiration_seconds Deployment#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Path specifies a relative path to the mount point of the projected volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path: string;
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjectedSources {
  /**
  * config_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map Deployment#config_map}
  */
  readonly configMap?: DeploymentSpecTemplateSpecVolumeProjectedSourcesConfigMap[];
  /**
  * downward_api block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#downward_api Deployment#downward_api}
  */
  readonly downwardApi?: DeploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApi[];
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret Deployment#secret}
  */
  readonly secret?: DeploymentSpecTemplateSpecVolumeProjectedSourcesSecret[];
  /**
  * service_account_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#service_account_token Deployment#service_account_token}
  */
  readonly serviceAccountToken?: DeploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken[];
}

function deploymentSpecTemplateSpecVolumeProjectedSourcesToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform)(struct!.configMap),
    downward_api: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform)(struct!.downwardApi),
    secret: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform)(struct!.secret),
    service_account_token: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform)(struct!.serviceAccountToken),
  }
}

export interface DeploymentSpecTemplateSpecVolumeProjected {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#default_mode Deployment#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#sources Deployment#sources}
  */
  readonly sources: DeploymentSpecTemplateSpecVolumeProjectedSources[];
}

function deploymentSpecTemplateSpecVolumeProjectedToTerraform(struct?: DeploymentSpecTemplateSpecVolumeProjected): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedSourcesToTerraform)(struct!.sources),
  }
}

export interface DeploymentSpecTemplateSpecVolumeQuobyte {
  /**
  * Group to map volume access to Default is no group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#group Deployment#group}
  */
  readonly group?: string;
  /**
  * Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#registry Deployment#registry}
  */
  readonly registry: string;
  /**
  * User to map volume access to Defaults to serivceaccount user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#user Deployment#user}
  */
  readonly user?: string;
  /**
  * Volume is a string that references an already created Quobyte volume by name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume Deployment#volume}
  */
  readonly volume: string;
}

function deploymentSpecTemplateSpecVolumeQuobyteToTerraform(struct?: DeploymentSpecTemplateSpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export interface DeploymentSpecTemplateSpecVolumeRbdSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#namespace Deployment#namespace}
  */
  readonly namespace?: string;
}

function deploymentSpecTemplateSpecVolumeRbdSecretRefToTerraform(struct?: DeploymentSpecTemplateSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface DeploymentSpecTemplateSpecVolumeRbd {
  /**
  * A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#ceph_monitors Deployment#ceph_monitors}
  */
  readonly cephMonitors: string[];
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#keyring Deployment#keyring}
  */
  readonly keyring?: string;
  /**
  * The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rados_user Deployment#rados_user}
  */
  readonly radosUser?: string;
  /**
  * The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rbd_image Deployment#rbd_image}
  */
  readonly rbdImage: string;
  /**
  * The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rbd_pool Deployment#rbd_pool}
  */
  readonly rbdPool?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#read_only Deployment#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_ref Deployment#secret_ref}
  */
  readonly secretRef?: DeploymentSpecTemplateSpecVolumeRbdSecretRef[];
}

function deploymentSpecTemplateSpecVolumeRbdToTerraform(struct?: DeploymentSpecTemplateSpecVolumeRbd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ceph_monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cephMonitors),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    rados_user: cdktf.stringToTerraform(struct!.radosUser),
    rbd_image: cdktf.stringToTerraform(struct!.rbdImage),
    rbd_pool: cdktf.stringToTerraform(struct!.rbdPool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(deploymentSpecTemplateSpecVolumeRbdSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface DeploymentSpecTemplateSpecVolumeSecretItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#key Deployment#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#mode Deployment#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#path Deployment#path}
  */
  readonly path?: string;
}

function deploymentSpecTemplateSpecVolumeSecretItemsToTerraform(struct?: DeploymentSpecTemplateSpecVolumeSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DeploymentSpecTemplateSpecVolumeSecret {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#default_mode Deployment#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * Optional: Specify whether the Secret or its keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#optional Deployment#optional}
  */
  readonly optional?: boolean;
  /**
  * Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret_name Deployment#secret_name}
  */
  readonly secretName?: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#items Deployment#items}
  */
  readonly items?: DeploymentSpecTemplateSpecVolumeSecretItems[];
}

function deploymentSpecTemplateSpecVolumeSecretToTerraform(struct?: DeploymentSpecTemplateSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    items: cdktf.listMapper(deploymentSpecTemplateSpecVolumeSecretItemsToTerraform)(struct!.items),
  }
}

export interface DeploymentSpecTemplateSpecVolumeVsphereVolume {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fs_type Deployment#fs_type}
  */
  readonly fsType?: string;
  /**
  * Path that identifies vSphere volume vmdk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume_path Deployment#volume_path}
  */
  readonly volumePath: string;
}

function deploymentSpecTemplateSpecVolumeVsphereVolumeToTerraform(struct?: DeploymentSpecTemplateSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export interface DeploymentSpecTemplateSpecVolume {
  /**
  * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#name Deployment#name}
  */
  readonly name?: string;
  /**
  * aws_elastic_block_store block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#aws_elastic_block_store Deployment#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DeploymentSpecTemplateSpecVolumeAwsElasticBlockStore[];
  /**
  * azure_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#azure_disk Deployment#azure_disk}
  */
  readonly azureDisk?: DeploymentSpecTemplateSpecVolumeAzureDisk[];
  /**
  * azure_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#azure_file Deployment#azure_file}
  */
  readonly azureFile?: DeploymentSpecTemplateSpecVolumeAzureFile[];
  /**
  * ceph_fs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#ceph_fs Deployment#ceph_fs}
  */
  readonly cephFs?: DeploymentSpecTemplateSpecVolumeCephFs[];
  /**
  * cinder block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#cinder Deployment#cinder}
  */
  readonly cinder?: DeploymentSpecTemplateSpecVolumeCinder[];
  /**
  * config_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#config_map Deployment#config_map}
  */
  readonly configMap?: DeploymentSpecTemplateSpecVolumeConfigMap[];
  /**
  * csi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#csi Deployment#csi}
  */
  readonly csi?: DeploymentSpecTemplateSpecVolumeCsi[];
  /**
  * downward_api block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#downward_api Deployment#downward_api}
  */
  readonly downwardApi?: DeploymentSpecTemplateSpecVolumeDownwardApi[];
  /**
  * empty_dir block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#empty_dir Deployment#empty_dir}
  */
  readonly emptyDir?: DeploymentSpecTemplateSpecVolumeEmptyDir[];
  /**
  * fc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#fc Deployment#fc}
  */
  readonly fc?: DeploymentSpecTemplateSpecVolumeFc[];
  /**
  * flex_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#flex_volume Deployment#flex_volume}
  */
  readonly flexVolume?: DeploymentSpecTemplateSpecVolumeFlexVolume[];
  /**
  * flocker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#flocker Deployment#flocker}
  */
  readonly flocker?: DeploymentSpecTemplateSpecVolumeFlocker[];
  /**
  * gce_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#gce_persistent_disk Deployment#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DeploymentSpecTemplateSpecVolumeGcePersistentDisk[];
  /**
  * git_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#git_repo Deployment#git_repo}
  */
  readonly gitRepo?: DeploymentSpecTemplateSpecVolumeGitRepo[];
  /**
  * glusterfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#glusterfs Deployment#glusterfs}
  */
  readonly glusterfs?: DeploymentSpecTemplateSpecVolumeGlusterfs[];
  /**
  * host_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_path Deployment#host_path}
  */
  readonly hostPath?: DeploymentSpecTemplateSpecVolumeHostPath[];
  /**
  * iscsi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#iscsi Deployment#iscsi}
  */
  readonly iscsi?: DeploymentSpecTemplateSpecVolumeIscsi[];
  /**
  * local block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#local Deployment#local}
  */
  readonly local?: DeploymentSpecTemplateSpecVolumeLocal[];
  /**
  * nfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#nfs Deployment#nfs}
  */
  readonly nfs?: DeploymentSpecTemplateSpecVolumeNfs[];
  /**
  * persistent_volume_claim block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#persistent_volume_claim Deployment#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DeploymentSpecTemplateSpecVolumePersistentVolumeClaim[];
  /**
  * photon_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#photon_persistent_disk Deployment#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DeploymentSpecTemplateSpecVolumePhotonPersistentDisk[];
  /**
  * projected block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#projected Deployment#projected}
  */
  readonly projected?: DeploymentSpecTemplateSpecVolumeProjected[];
  /**
  * quobyte block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#quobyte Deployment#quobyte}
  */
  readonly quobyte?: DeploymentSpecTemplateSpecVolumeQuobyte[];
  /**
  * rbd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#rbd Deployment#rbd}
  */
  readonly rbd?: DeploymentSpecTemplateSpecVolumeRbd[];
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#secret Deployment#secret}
  */
  readonly secret?: DeploymentSpecTemplateSpecVolumeSecret[];
  /**
  * vsphere_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#vsphere_volume Deployment#vsphere_volume}
  */
  readonly vsphereVolume?: DeploymentSpecTemplateSpecVolumeVsphereVolume[];
}

function deploymentSpecTemplateSpecVolumeToTerraform(struct?: DeploymentSpecTemplateSpecVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws_elastic_block_store: cdktf.listMapper(deploymentSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform)(struct!.awsElasticBlockStore),
    azure_disk: cdktf.listMapper(deploymentSpecTemplateSpecVolumeAzureDiskToTerraform)(struct!.azureDisk),
    azure_file: cdktf.listMapper(deploymentSpecTemplateSpecVolumeAzureFileToTerraform)(struct!.azureFile),
    ceph_fs: cdktf.listMapper(deploymentSpecTemplateSpecVolumeCephFsToTerraform)(struct!.cephFs),
    cinder: cdktf.listMapper(deploymentSpecTemplateSpecVolumeCinderToTerraform)(struct!.cinder),
    config_map: cdktf.listMapper(deploymentSpecTemplateSpecVolumeConfigMapToTerraform)(struct!.configMap),
    csi: cdktf.listMapper(deploymentSpecTemplateSpecVolumeCsiToTerraform)(struct!.csi),
    downward_api: cdktf.listMapper(deploymentSpecTemplateSpecVolumeDownwardApiToTerraform)(struct!.downwardApi),
    empty_dir: cdktf.listMapper(deploymentSpecTemplateSpecVolumeEmptyDirToTerraform)(struct!.emptyDir),
    fc: cdktf.listMapper(deploymentSpecTemplateSpecVolumeFcToTerraform)(struct!.fc),
    flex_volume: cdktf.listMapper(deploymentSpecTemplateSpecVolumeFlexVolumeToTerraform)(struct!.flexVolume),
    flocker: cdktf.listMapper(deploymentSpecTemplateSpecVolumeFlockerToTerraform)(struct!.flocker),
    gce_persistent_disk: cdktf.listMapper(deploymentSpecTemplateSpecVolumeGcePersistentDiskToTerraform)(struct!.gcePersistentDisk),
    git_repo: cdktf.listMapper(deploymentSpecTemplateSpecVolumeGitRepoToTerraform)(struct!.gitRepo),
    glusterfs: cdktf.listMapper(deploymentSpecTemplateSpecVolumeGlusterfsToTerraform)(struct!.glusterfs),
    host_path: cdktf.listMapper(deploymentSpecTemplateSpecVolumeHostPathToTerraform)(struct!.hostPath),
    iscsi: cdktf.listMapper(deploymentSpecTemplateSpecVolumeIscsiToTerraform)(struct!.iscsi),
    local: cdktf.listMapper(deploymentSpecTemplateSpecVolumeLocalToTerraform)(struct!.local),
    nfs: cdktf.listMapper(deploymentSpecTemplateSpecVolumeNfsToTerraform)(struct!.nfs),
    persistent_volume_claim: cdktf.listMapper(deploymentSpecTemplateSpecVolumePersistentVolumeClaimToTerraform)(struct!.persistentVolumeClaim),
    photon_persistent_disk: cdktf.listMapper(deploymentSpecTemplateSpecVolumePhotonPersistentDiskToTerraform)(struct!.photonPersistentDisk),
    projected: cdktf.listMapper(deploymentSpecTemplateSpecVolumeProjectedToTerraform)(struct!.projected),
    quobyte: cdktf.listMapper(deploymentSpecTemplateSpecVolumeQuobyteToTerraform)(struct!.quobyte),
    rbd: cdktf.listMapper(deploymentSpecTemplateSpecVolumeRbdToTerraform)(struct!.rbd),
    secret: cdktf.listMapper(deploymentSpecTemplateSpecVolumeSecretToTerraform)(struct!.secret),
    vsphere_volume: cdktf.listMapper(deploymentSpecTemplateSpecVolumeVsphereVolumeToTerraform)(struct!.vsphereVolume),
  }
}

export interface DeploymentSpecTemplateSpec {
  /**
  * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#active_deadline_seconds Deployment#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#automount_service_account_token Deployment#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean;
  /**
  * Set DNS policy for containers within the pod. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Optional: Defaults to 'ClusterFirst', see [Kubernetes reference](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#dns_policy Deployment#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Enables generating environment variables for service discovery. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#enable_service_links Deployment#enable_service_links}
  */
  readonly enableServiceLinks?: boolean;
  /**
  * Use the host's ipc namespace. Optional: Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_ipc Deployment#host_ipc}
  */
  readonly hostIpc?: boolean;
  /**
  * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_network Deployment#host_network}
  */
  readonly hostNetwork?: boolean;
  /**
  * Use the host's pid namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_pid Deployment#host_pid}
  */
  readonly hostPid?: boolean;
  /**
  * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#hostname Deployment#hostname}
  */
  readonly hostname?: string;
  /**
  * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_name Deployment#node_name}
  */
  readonly nodeName?: string;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#node_selector Deployment#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#priority_class_name Deployment#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Restart policy for all containers within the pod. One of Always, OnFailure, Never. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#restart_policy Deployment#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#service_account_name Deployment#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#share_process_namespace Deployment#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean;
  /**
  * If specified, the fully qualified Pod hostname will be "...svc.". If not specified, the pod will not have a domainname at all..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#subdomain Deployment#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#termination_grace_period_seconds Deployment#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#affinity Deployment#affinity}
  */
  readonly affinity?: DeploymentSpecTemplateSpecAffinity[];
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#container Deployment#container}
  */
  readonly container?: DeploymentSpecTemplateSpecContainer[];
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#dns_config Deployment#dns_config}
  */
  readonly dnsConfig?: DeploymentSpecTemplateSpecDnsConfig[];
  /**
  * host_aliases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#host_aliases Deployment#host_aliases}
  */
  readonly hostAliases?: DeploymentSpecTemplateSpecHostAliases[];
  /**
  * image_pull_secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#image_pull_secrets Deployment#image_pull_secrets}
  */
  readonly imagePullSecrets?: DeploymentSpecTemplateSpecImagePullSecrets[];
  /**
  * init_container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#init_container Deployment#init_container}
  */
  readonly initContainer?: DeploymentSpecTemplateSpecInitContainer[];
  /**
  * readiness_gate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#readiness_gate Deployment#readiness_gate}
  */
  readonly readinessGate?: DeploymentSpecTemplateSpecReadinessGate[];
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#security_context Deployment#security_context}
  */
  readonly securityContext?: DeploymentSpecTemplateSpecSecurityContext[];
  /**
  * toleration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#toleration Deployment#toleration}
  */
  readonly toleration?: DeploymentSpecTemplateSpecToleration[];
  /**
  * topology_spread_constraint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#topology_spread_constraint Deployment#topology_spread_constraint}
  */
  readonly topologySpreadConstraint?: DeploymentSpecTemplateSpecTopologySpreadConstraint[];
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#volume Deployment#volume}
  */
  readonly volume?: DeploymentSpecTemplateSpecVolume[];
}

function deploymentSpecTemplateSpecToTerraform(struct?: DeploymentSpecTemplateSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    affinity: cdktf.listMapper(deploymentSpecTemplateSpecAffinityToTerraform)(struct!.affinity),
    container: cdktf.listMapper(deploymentSpecTemplateSpecContainerToTerraform)(struct!.container),
    dns_config: cdktf.listMapper(deploymentSpecTemplateSpecDnsConfigToTerraform)(struct!.dnsConfig),
    host_aliases: cdktf.listMapper(deploymentSpecTemplateSpecHostAliasesToTerraform)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(deploymentSpecTemplateSpecImagePullSecretsToTerraform)(struct!.imagePullSecrets),
    init_container: cdktf.listMapper(deploymentSpecTemplateSpecInitContainerToTerraform)(struct!.initContainer),
    readiness_gate: cdktf.listMapper(deploymentSpecTemplateSpecReadinessGateToTerraform)(struct!.readinessGate),
    security_context: cdktf.listMapper(deploymentSpecTemplateSpecSecurityContextToTerraform)(struct!.securityContext),
    toleration: cdktf.listMapper(deploymentSpecTemplateSpecTolerationToTerraform)(struct!.toleration),
    topology_spread_constraint: cdktf.listMapper(deploymentSpecTemplateSpecTopologySpreadConstraintToTerraform)(struct!.topologySpreadConstraint),
    volume: cdktf.listMapper(deploymentSpecTemplateSpecVolumeToTerraform)(struct!.volume),
  }
}

export interface DeploymentSpecTemplate {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#metadata Deployment#metadata}
  */
  readonly metadata: DeploymentSpecTemplateMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#spec Deployment#spec}
  */
  readonly spec: DeploymentSpecTemplateSpec[];
}

function deploymentSpecTemplateToTerraform(struct?: DeploymentSpecTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metadata: cdktf.listMapper(deploymentSpecTemplateMetadataToTerraform)(struct!.metadata),
    spec: cdktf.listMapper(deploymentSpecTemplateSpecToTerraform)(struct!.spec),
  }
}

export interface DeploymentSpec {
  /**
  * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#min_ready_seconds Deployment#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * Indicates that the deployment is paused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#paused Deployment#paused}
  */
  readonly paused?: boolean;
  /**
  * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#progress_deadline_seconds Deployment#progress_deadline_seconds}
  */
  readonly progressDeadlineSeconds?: number;
  /**
  * Number of desired pods. This is a string to be able to distinguish between explicit zero and not specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#replicas Deployment#replicas}
  */
  readonly replicas?: string;
  /**
  * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#revision_history_limit Deployment#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#selector Deployment#selector}
  */
  readonly selector?: DeploymentSpecSelector[];
  /**
  * strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#strategy Deployment#strategy}
  */
  readonly strategy?: DeploymentSpecStrategy[];
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#template Deployment#template}
  */
  readonly template: DeploymentSpecTemplate[];
}

function deploymentSpecToTerraform(struct?: DeploymentSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    paused: cdktf.booleanToTerraform(struct!.paused),
    progress_deadline_seconds: cdktf.numberToTerraform(struct!.progressDeadlineSeconds),
    replicas: cdktf.stringToTerraform(struct!.replicas),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    selector: cdktf.listMapper(deploymentSpecSelectorToTerraform)(struct!.selector),
    strategy: cdktf.listMapper(deploymentSpecStrategyToTerraform)(struct!.strategy),
    template: cdktf.listMapper(deploymentSpecTemplateToTerraform)(struct!.template),
  }
}

export interface DeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#create Deployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#delete Deployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html#update Deployment#update}
  */
  readonly update?: string;
}

function deploymentTimeoutsToTerraform(struct?: DeploymentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html kubernetes_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/deployment.html kubernetes_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_deployment',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._waitForRollout = config.waitForRollout;
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean;
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean ) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DeploymentMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: DeploymentMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: DeploymentSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: DeploymentSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DeploymentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DeploymentTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      metadata: cdktf.listMapper(deploymentMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(deploymentSpecToTerraform)(this._spec),
      timeouts: deploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
