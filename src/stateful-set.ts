// https://www.terraform.io/docs/providers/kubernetes/r/stateful_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatefulSetConfig extends cdktf.TerraformMetaArguments {
  /** Wait for the rollout of the stateful set to complete. Defaults to true. */
  readonly waitForRollout?: boolean;
  /** metadata block */
  readonly metadata: StatefulSetMetadata[];
  /** spec block */
  readonly spec: StatefulSetSpec[];
  /** timeouts block */
  readonly timeouts?: StatefulSetTimeouts;
}
export interface StatefulSetMetadata {
  /** An unstructured key value map stored with the stateful set that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the stateful set. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the stateful set, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the stateful set must be unique. */
  readonly namespace?: string;
}

function statefulSetMetadataToTerraform(struct?: StatefulSetMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface StatefulSetSpecSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function statefulSetSpecSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StatefulSetSpecSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: StatefulSetSpecSelectorMatchExpressions[];
}

function statefulSetSpecSelectorToTerraform(struct?: StatefulSetSpecSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateMetadata {
  /** An unstructured key value map stored with the stateful set that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the stateful set. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the stateful set, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}

function statefulSetSpecTemplateMetadataToTerraform(struct?: StatefulSetSpecTemplateMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /** match_expressions block */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
}

function statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight is in the range 1-100 */
  readonly weight: number;
  /** preference block */
  readonly preference: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference[];
}

function statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform)(struct!.preference),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm {
  /** match_expressions block */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions[];
}

function statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** node_selector_term block */
  readonly nodeSelectorTerm?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[];
}

function statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_selector_term: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function statefulSetSpecTemplateSpecAffinityNodeAffinityToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function statefulSetSpecTemplateSpecAffinityPodAffinityToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function statefulSetSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface StatefulSetSpecTemplateSpecAffinity {
  /** node_affinity block */
  readonly nodeAffinity?: StatefulSetSpecTemplateSpecAffinityNodeAffinity[];
  /** pod_affinity block */
  readonly podAffinity?: StatefulSetSpecTemplateSpecAffinityPodAffinity[];
  /** pod_anti_affinity block */
  readonly podAntiAffinity?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinity[];
}

function statefulSetSpecTemplateSpecAffinityToTerraform(struct?: StatefulSetSpecTemplateSpecAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_affinity: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityToTerraform)(struct!.nodeAffinity),
    pod_affinity: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityToTerraform)(struct!.podAntiAffinity),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}

function statefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function statefulSetSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  readonly divisor?: string;
  /** Resource to select */
  readonly resource: string;
}

function statefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}

function statefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRef[];
}

function statefulSetSpecTemplateSpecContainerEnvValueFromToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: StatefulSetSpecTemplateSpecContainerEnvValueFrom[];
}

function statefulSetSpecTemplateSpecContainerEnvToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}

function statefulSetSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}

function statefulSetSpecTemplateSpecContainerEnvFromSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: StatefulSetSpecTemplateSpecContainerEnvFromSecretRef[];
}

function statefulSetSpecTemplateSpecContainerEnvFromToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecContainerLifecyclePostStartExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocket[];
}

function statefulSetSpecTemplateSpecContainerLifecyclePostStartToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecContainerLifecyclePreStopExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocket[];
}

function statefulSetSpecTemplateSpecContainerLifecyclePreStopToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecycle {
  /** post_start block */
  readonly postStart?: StatefulSetSpecTemplateSpecContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: StatefulSetSpecTemplateSpecContainerLifecyclePreStop[];
}

function statefulSetSpecTemplateSpecContainerLifecycleToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecContainerLivenessProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLivenessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerLivenessProbeTcpSocket[];
}

function statefulSetSpecTemplateSpecContainerLivenessProbeToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecContainerPort {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  readonly containerPort: number;
  /** What host IP to bind the external port to. */
  readonly hostIp?: string;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  readonly hostPort?: number;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services */
  readonly name?: string;
  /** Protocol for port. Must be UDP or TCP. Defaults to "TCP". */
  readonly protocol?: string;
}

function statefulSetSpecTemplateSpecContainerPortToTerraform(struct?: StatefulSetSpecTemplateSpecContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface StatefulSetSpecTemplateSpecContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecContainerReadinessProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerReadinessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerReadinessProbeTcpSocket[];
}

function statefulSetSpecTemplateSpecContainerReadinessProbeToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecContainerResources {
  /** Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/ */
  readonly limits?: { [key: string]: string };
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ */
  readonly requests?: { [key: string]: string };
}

function statefulSetSpecTemplateSpecContainerResourcesToTerraform(struct?: StatefulSetSpecTemplateSpecContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export interface StatefulSetSpecTemplateSpecContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}

function statefulSetSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform(struct?: StatefulSetSpecTemplateSpecContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function statefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct?: StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface StatefulSetSpecTemplateSpecContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: string;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: string;
  /** capabilities block */
  readonly capabilities?: StatefulSetSpecTemplateSpecContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptions[];
}

function statefulSetSpecTemplateSpecContainerSecurityContextToTerraform(struct?: StatefulSetSpecTemplateSpecContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(statefulSetSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(statefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface StatefulSetSpecTemplateSpecContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecContainerStartupProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecContainerStartupProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerStartupProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerStartupProbeTcpSocket[];
}

function statefulSetSpecTemplateSpecContainerStartupProbeToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecContainerVolumeMount {
  /** Path within the container at which the volume should be mounted. Must not contain ':'. */
  readonly mountPath: string;
  /** Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional. */
  readonly mountPropagation?: string;
  /** This must match the Name of a Volume. */
  readonly name: string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readonly readOnly?: boolean;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  readonly subPath?: string;
}

function statefulSetSpecTemplateSpecContainerVolumeMountToTerraform(struct?: StatefulSetSpecTemplateSpecContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface StatefulSetSpecTemplateSpecContainer {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly args?: string[];
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly command?: string[];
  /** Docker image name. More info: http://kubernetes.io/docs/user-guide/images */
  readonly image?: string;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images */
  readonly imagePullPolicy?: string;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  readonly name: string;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF.  */
  readonly stdin?: boolean;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. */
  readonly stdinOnce?: boolean;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated. */
  readonly terminationMessagePath?: string;
  /** Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  readonly terminationMessagePolicy?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: StatefulSetSpecTemplateSpecContainerEnv[];
  /** env_from block */
  readonly envFrom?: StatefulSetSpecTemplateSpecContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: StatefulSetSpecTemplateSpecContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: StatefulSetSpecTemplateSpecContainerLivenessProbe[];
  /** port block */
  readonly port?: StatefulSetSpecTemplateSpecContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: StatefulSetSpecTemplateSpecContainerReadinessProbe[];
  /** resources block */
  readonly resources?: StatefulSetSpecTemplateSpecContainerResources[];
  /** security_context block */
  readonly securityContext?: StatefulSetSpecTemplateSpecContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: StatefulSetSpecTemplateSpecContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: StatefulSetSpecTemplateSpecContainerVolumeMount[];
}

function statefulSetSpecTemplateSpecContainerToTerraform(struct?: StatefulSetSpecTemplateSpecContainer): any {
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
    env: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(statefulSetSpecTemplateSpecContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(statefulSetSpecTemplateSpecContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(statefulSetSpecTemplateSpecContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(statefulSetSpecTemplateSpecContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(statefulSetSpecTemplateSpecContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(statefulSetSpecTemplateSpecContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface StatefulSetSpecTemplateSpecDnsConfigOption {
  /** Name of the option. */
  readonly name: string;
  /** Value of the option. Optional: Defaults to empty. */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecDnsConfigOptionToTerraform(struct?: StatefulSetSpecTemplateSpecDnsConfigOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecDnsConfig {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  readonly nameservers?: string[];
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  readonly searches?: string[];
  /** option block */
  readonly option?: StatefulSetSpecTemplateSpecDnsConfigOption[];
}

function statefulSetSpecTemplateSpecDnsConfigToTerraform(struct?: StatefulSetSpecTemplateSpecDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    searches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searches),
    option: cdktf.listMapper(statefulSetSpecTemplateSpecDnsConfigOptionToTerraform)(struct!.option),
  }
}

export interface StatefulSetSpecTemplateSpecHostAliases {
  /** Hostnames for the IP address. */
  readonly hostnames: string[];
  /** IP address of the host file entry. */
  readonly ip: string;
}

function statefulSetSpecTemplateSpecHostAliasesToTerraform(struct?: StatefulSetSpecTemplateSpecHostAliases): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface StatefulSetSpecTemplateSpecImagePullSecrets {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
}

function statefulSetSpecTemplateSpecImagePullSecretsToTerraform(struct?: StatefulSetSpecTemplateSpecImagePullSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}

function statefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function statefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  readonly divisor?: string;
  /** Resource to select */
  readonly resource: string;
}

function statefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}

function statefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef[];
}

function statefulSetSpecTemplateSpecInitContainerEnvValueFromToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: StatefulSetSpecTemplateSpecInitContainerEnvValueFrom[];
}

function statefulSetSpecTemplateSpecInitContainerEnvToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}

function statefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}

function statefulSetSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRef[];
}

function statefulSetSpecTemplateSpecInitContainerEnvFromToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket[];
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket[];
}

function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecycle {
  /** post_start block */
  readonly postStart?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStop[];
}

function statefulSetSpecTemplateSpecInitContainerLifecycleToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecInitContainerLivenessProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocket[];
}

function statefulSetSpecTemplateSpecInitContainerLivenessProbeToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerPort {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  readonly containerPort: number;
  /** What host IP to bind the external port to. */
  readonly hostIp?: string;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  readonly hostPort?: number;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services */
  readonly name?: string;
  /** Protocol for port. Must be UDP or TCP. Defaults to "TCP". */
  readonly protocol?: string;
}

function statefulSetSpecTemplateSpecInitContainerPortToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecInitContainerReadinessProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocket[];
}

function statefulSetSpecTemplateSpecInitContainerReadinessProbeToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerResources {
  /** Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/ */
  readonly limits?: { [key: string]: string };
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/ */
  readonly requests?: { [key: string]: string };
}

function statefulSetSpecTemplateSpecInitContainerResourcesToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}

function statefulSetSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function statefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: string;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: string;
  /** capabilities block */
  readonly capabilities?: StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions[];
}

function statefulSetSpecTemplateSpecInitContainerSecurityContextToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function statefulSetSpecTemplateSpecInitContainerStartupProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[];
}

function statefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function statefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerStartupProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocket[];
}

function statefulSetSpecTemplateSpecInitContainerStartupProbeToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerVolumeMount {
  /** Path within the container at which the volume should be mounted. Must not contain ':'. */
  readonly mountPath: string;
  /** Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional. */
  readonly mountPropagation?: string;
  /** This must match the Name of a Volume. */
  readonly name: string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readonly readOnly?: boolean;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  readonly subPath?: string;
}

function statefulSetSpecTemplateSpecInitContainerVolumeMountToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainer {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly args?: string[];
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly command?: string[];
  /** Docker image name. More info: http://kubernetes.io/docs/user-guide/images */
  readonly image?: string;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images */
  readonly imagePullPolicy?: string;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  readonly name: string;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF.  */
  readonly stdin?: boolean;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. */
  readonly stdinOnce?: boolean;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated. */
  readonly terminationMessagePath?: string;
  /** Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  readonly terminationMessagePolicy?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: StatefulSetSpecTemplateSpecInitContainerEnv[];
  /** env_from block */
  readonly envFrom?: StatefulSetSpecTemplateSpecInitContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: StatefulSetSpecTemplateSpecInitContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: StatefulSetSpecTemplateSpecInitContainerLivenessProbe[];
  /** port block */
  readonly port?: StatefulSetSpecTemplateSpecInitContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: StatefulSetSpecTemplateSpecInitContainerReadinessProbe[];
  /** resources block */
  readonly resources?: StatefulSetSpecTemplateSpecInitContainerResources[];
  /** security_context block */
  readonly securityContext?: StatefulSetSpecTemplateSpecInitContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: StatefulSetSpecTemplateSpecInitContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: StatefulSetSpecTemplateSpecInitContainerVolumeMount[];
}

function statefulSetSpecTemplateSpecInitContainerToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainer): any {
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
    env: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface StatefulSetSpecTemplateSpecReadinessGate {
  /** refers to a condition in the pod's condition list with matching type. */
  readonly conditionType: string;
}

function statefulSetSpecTemplateSpecReadinessGateToTerraform(struct?: StatefulSetSpecTemplateSpecReadinessGate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}

export interface StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function statefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct?: StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface StatefulSetSpecTemplateSpecSecurityContextSysctl {
  /** Name of a property to set. */
  readonly name: string;
  /** Value of a property to set. */
  readonly value: string;
}

function statefulSetSpecTemplateSpecSecurityContextSysctlToTerraform(struct?: StatefulSetSpecTemplateSpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecSecurityContext {
  /** A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. */
  readonly fsGroup?: string;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsGroup?: string;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsUser?: string;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID. If unspecified, no groups will be added to any container. */
  readonly supplementalGroups?: number[];
  /** se_linux_options block */
  readonly seLinuxOptions?: StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions[];
  /** sysctl block */
  readonly sysctl?: StatefulSetSpecTemplateSpecSecurityContextSysctl[];
}

function statefulSetSpecTemplateSpecSecurityContextToTerraform(struct?: StatefulSetSpecTemplateSpecSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_group: cdktf.stringToTerraform(struct!.fsGroup),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    supplemental_groups: cdktf.listMapper(cdktf.numberToTerraform)(struct!.supplementalGroups),
    se_linux_options: cdktf.listMapper(statefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
    sysctl: cdktf.listMapper(statefulSetSpecTemplateSpecSecurityContextSysctlToTerraform)(struct!.sysctl),
  }
}

export interface StatefulSetSpecTemplateSpecToleration {
  /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
  readonly effect?: string;
  /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
  readonly key?: string;
  /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
  readonly operator?: string;
  /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
  readonly tolerationSeconds?: string;
  /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
  readonly value?: string;
}

function statefulSetSpecTemplateSpecTolerationToTerraform(struct?: StatefulSetSpecTemplateSpecToleration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.stringToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function statefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions[];
}

function statefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecTopologySpreadConstraint {
  /** describes the degree to which pods may be unevenly distributed. */
  readonly maxSkew?: number;
  /** the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. */
  readonly topologyKey?: string;
  /** indicates how to deal with a pod if it doesn't satisfy the spread constraint. */
  readonly whenUnsatisfiable?: string;
  /** label_selector block */
  readonly labelSelector?: StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelector[];
}

function statefulSetSpecTemplateSpecTopologySpreadConstraintToTerraform(struct?: StatefulSetSpecTemplateSpecTopologySpreadConstraint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStore {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  readonly partition?: number;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly readOnly?: boolean;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly volumeId: string;
}

function statefulSetSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeAzureDisk {
  /** Host Caching mode: None, Read Only, Read Write. */
  readonly cachingMode: string;
  /** The URI the data disk in the blob storage */
  readonly dataDiskUri: string;
  /** The Name of the data disk in the blob storage */
  readonly diskName: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared */
  readonly kind?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
}

function statefulSetSpecTemplateSpecVolumeAzureDiskToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeAzureDisk): any {
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

export interface StatefulSetSpecTemplateSpecVolumeAzureFile {
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** The name of secret that contains Azure Storage Account Name and Key */
  readonly secretName: string;
  /** Share Name */
  readonly shareName: string;
}

function statefulSetSpecTemplateSpecVolumeAzureFileToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeCephFsSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function statefulSetSpecTemplateSpecVolumeCephFsSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeCephFs {
  /** Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly monitors: string[];
  /** Used as the mounted root, rather than the full Ceph tree, default is / */
  readonly path?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly secretFile?: string;
  /** User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly user?: string;
  /** secret_ref block */
  readonly secretRef?: StatefulSetSpecTemplateSpecVolumeCephFsSecretRef[];
}

function statefulSetSpecTemplateSpecVolumeCephFsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    user: cdktf.stringToTerraform(struct!.user),
    secret_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeCephFsSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeCinder {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly fsType?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly readOnly?: boolean;
  /** Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly volumeId: string;
}

function statefulSetSpecTemplateSpecVolumeCinderToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCinder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeConfigMapItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function statefulSetSpecTemplateSpecVolumeConfigMapItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeConfigMap {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Optional: Specify whether the ConfigMap or its keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: StatefulSetSpecTemplateSpecVolumeConfigMapItems[];
}

function statefulSetSpecTemplateSpecVolumeConfigMapToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeCsiControllerExpandSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function statefulSetSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCsiControllerExpandSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeCsiControllerPublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function statefulSetSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCsiControllerPublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function statefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeCsiNodeStageSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function statefulSetSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCsiNodeStageSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeCsi {
  /** the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi */
  readonly readOnly?: boolean;
  /** Attributes of the volume to publish. */
  readonly volumeAttributes?: { [key: string]: string };
  /** A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly volumeHandle: string;
  /** controller_expand_secret_ref block */
  readonly controllerExpandSecretRef?: StatefulSetSpecTemplateSpecVolumeCsiControllerExpandSecretRef[];
  /** controller_publish_secret_ref block */
  readonly controllerPublishSecretRef?: StatefulSetSpecTemplateSpecVolumeCsiControllerPublishSecretRef[];
  /** node_publish_secret_ref block */
  readonly nodePublishSecretRef?: StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRef[];
  /** node_stage_secret_ref block */
  readonly nodeStageSecretRef?: StatefulSetSpecTemplateSpecVolumeCsiNodeStageSecretRef[];
}

function statefulSetSpecTemplateSpecVolumeCsiToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.volumeAttributes),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
    controller_expand_secret_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform)(struct!.controllerExpandSecretRef),
    controller_publish_secret_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform)(struct!.controllerPublishSecretRef),
    node_publish_secret_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform)(struct!.nodePublishSecretRef),
    node_stage_secret_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform)(struct!.nodeStageSecretRef),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function statefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef {
  readonly containerName: string;
  readonly divisor?: string;
  /** Resource to select */
  readonly resource: string;
}

function statefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeDownwardApiItems {
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly path: string;
  /** field_ref block */
  readonly fieldRef: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef[];
}

function statefulSetSpecTemplateSpecVolumeDownwardApiItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeDownwardApi {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** items block */
  readonly items?: StatefulSetSpecTemplateSpecVolumeDownwardApiItems[];
}

function statefulSetSpecTemplateSpecVolumeDownwardApiToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeEmptyDir {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  readonly medium?: string;
  /** Total amount of local storage required for this EmptyDir volume. */
  readonly sizeLimit?: string;
}

function statefulSetSpecTemplateSpecVolumeEmptyDirToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeFc {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** FC target lun number */
  readonly lun: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** FC target worldwide names (WWNs) */
  readonly targetWwNs: string[];
}

function statefulSetSpecTemplateSpecVolumeFcToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeFc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetWwNs),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function statefulSetSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeFlexVolume {
  /** Driver is the name of the driver to use for this volume. */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  readonly fsType?: string;
  /** Extra command options if any. */
  readonly options?: { [key: string]: string };
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRef[];
}

function statefulSetSpecTemplateSpecVolumeFlexVolumeToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeFlocker {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  readonly datasetName?: string;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  readonly datasetUuid?: string;
}

function statefulSetSpecTemplateSpecVolumeFlockerToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeGcePersistentDisk {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly partition?: number;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly pdName: string;
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly readOnly?: boolean;
}

function statefulSetSpecTemplateSpecVolumeGcePersistentDiskToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeGitRepo {
  /** Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  readonly directory?: string;
  /** Repository URL */
  readonly repository?: string;
  /** Commit hash for the specified revision. */
  readonly revision?: string;
}

function statefulSetSpecTemplateSpecVolumeGitRepoToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeGlusterfs {
  /** The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly endpointsName: string;
  /** The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly path: string;
  /** Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly readOnly?: boolean;
}

function statefulSetSpecTemplateSpecVolumeGlusterfsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoints_name: cdktf.stringToTerraform(struct!.endpointsName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeHostPath {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath */
  readonly path?: string;
  /** Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice */
  readonly type?: string;
}

function statefulSetSpecTemplateSpecVolumeHostPathToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeIscsi {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi */
  readonly fsType?: string;
  /** Target iSCSI Qualified Name. */
  readonly iqn: string;
  /** iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  readonly iscsiInterface?: string;
  /** iSCSI target lun number. */
  readonly lun?: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. */
  readonly readOnly?: boolean;
  /** iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  readonly targetPortal: string;
}

function statefulSetSpecTemplateSpecVolumeIscsiToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeIscsi): any {
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

export interface StatefulSetSpecTemplateSpecVolumeLocal {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local */
  readonly path?: string;
}

function statefulSetSpecTemplateSpecVolumeLocalToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeNfs {
  /** Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly path: string;
  /** Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly readOnly?: boolean;
  /** Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly server: string;
}

function statefulSetSpecTemplateSpecVolumeNfsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeNfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}

export interface StatefulSetSpecTemplateSpecVolumePersistentVolumeClaim {
  /** ClaimName is the name of a PersistentVolumeClaim in the same  */
  readonly claimName?: string;
  /** Will force the ReadOnly setting in VolumeMounts. */
  readonly readOnly?: boolean;
}

function statefulSetSpecTemplateSpecVolumePersistentVolumeClaimToTerraform(struct?: StatefulSetSpecTemplateSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface StatefulSetSpecTemplateSpecVolumePhotonPersistentDisk {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** ID that identifies Photon Controller persistent disk */
  readonly pdId: string;
}

function statefulSetSpecTemplateSpecVolumePhotonPersistentDiskToTerraform(struct?: StatefulSetSpecTemplateSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMap {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Optional: Specify whether the ConfigMap or it's keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItems[];
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to 'v1'. */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
  readonly containerName: string;
  readonly divisor?: string;
  /** Resource to select */
  readonly resource: string;
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems {
  /** Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly path: string;
  /** field_ref block */
  readonly fieldRef?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef[];
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApi {
  /** items block */
  readonly items?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[];
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecret {
  /** Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets */
  readonly name?: string;
  /** Optional: Specify whether the Secret or it's keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItems[];
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform)(struct!.items),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken {
  /** Audience is the intended audience of the token */
  readonly audience?: string;
  /** ExpirationSeconds is the expected duration of validity of the service account token. It defaults to 1 hour and must be at least 10 minutes (600 seconds). */
  readonly expirationSeconds?: number;
  /** Path specifies a relative path to the mount point of the projected volume. */
  readonly path: string;
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSources {
  /** config_map block */
  readonly configMap?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMap[];
  /** downward_api block */
  readonly downwardApi?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApi[];
  /** secret block */
  readonly secret?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecret[];
  /** service_account_token block */
  readonly serviceAccountToken?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken[];
}

function statefulSetSpecTemplateSpecVolumeProjectedSourcesToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform)(struct!.configMap),
    downward_api: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform)(struct!.downwardApi),
    secret: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform)(struct!.secret),
    service_account_token: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform)(struct!.serviceAccountToken),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjected {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** sources block */
  readonly sources: StatefulSetSpecTemplateSpecVolumeProjectedSources[];
}

function statefulSetSpecTemplateSpecVolumeProjectedToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjected): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesToTerraform)(struct!.sources),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeQuobyte {
  /** Group to map volume access to Default is no group */
  readonly group?: string;
  /** Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readonly readOnly?: boolean;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  readonly registry: string;
  /** User to map volume access to Defaults to serivceaccount user */
  readonly user?: string;
  /** Volume is a string that references an already created Quobyte volume by name. */
  readonly volume: string;
}

function statefulSetSpecTemplateSpecVolumeQuobyteToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeRbdSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function statefulSetSpecTemplateSpecVolumeRbdSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeRbd {
  /** A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly cephMonitors: string[];
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd */
  readonly fsType?: string;
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly keyring?: string;
  /** The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly radosUser?: string;
  /** The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly rbdImage: string;
  /** The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. */
  readonly rbdPool?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: StatefulSetSpecTemplateSpecVolumeRbdSecretRef[];
}

function statefulSetSpecTemplateSpecVolumeRbdToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeRbd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ceph_monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cephMonitors),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    rados_user: cdktf.stringToTerraform(struct!.radosUser),
    rbd_image: cdktf.stringToTerraform(struct!.rbdImage),
    rbd_pool: cdktf.stringToTerraform(struct!.rbdPool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeRbdSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeSecretItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function statefulSetSpecTemplateSpecVolumeSecretItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeSecret {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Optional: Specify whether the Secret or its keys must be defined. */
  readonly optional?: boolean;
  /** Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets */
  readonly secretName?: string;
  /** items block */
  readonly items?: StatefulSetSpecTemplateSpecVolumeSecretItems[];
}

function statefulSetSpecTemplateSpecVolumeSecretToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeSecretItemsToTerraform)(struct!.items),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeVsphereVolume {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Path that identifies vSphere volume vmdk */
  readonly volumePath: string;
}

function statefulSetSpecTemplateSpecVolumeVsphereVolumeToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export interface StatefulSetSpecTemplateSpecVolume {
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** aws_elastic_block_store block */
  readonly awsElasticBlockStore?: StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStore[];
  /** azure_disk block */
  readonly azureDisk?: StatefulSetSpecTemplateSpecVolumeAzureDisk[];
  /** azure_file block */
  readonly azureFile?: StatefulSetSpecTemplateSpecVolumeAzureFile[];
  /** ceph_fs block */
  readonly cephFs?: StatefulSetSpecTemplateSpecVolumeCephFs[];
  /** cinder block */
  readonly cinder?: StatefulSetSpecTemplateSpecVolumeCinder[];
  /** config_map block */
  readonly configMap?: StatefulSetSpecTemplateSpecVolumeConfigMap[];
  /** csi block */
  readonly csi?: StatefulSetSpecTemplateSpecVolumeCsi[];
  /** downward_api block */
  readonly downwardApi?: StatefulSetSpecTemplateSpecVolumeDownwardApi[];
  /** empty_dir block */
  readonly emptyDir?: StatefulSetSpecTemplateSpecVolumeEmptyDir[];
  /** fc block */
  readonly fc?: StatefulSetSpecTemplateSpecVolumeFc[];
  /** flex_volume block */
  readonly flexVolume?: StatefulSetSpecTemplateSpecVolumeFlexVolume[];
  /** flocker block */
  readonly flocker?: StatefulSetSpecTemplateSpecVolumeFlocker[];
  /** gce_persistent_disk block */
  readonly gcePersistentDisk?: StatefulSetSpecTemplateSpecVolumeGcePersistentDisk[];
  /** git_repo block */
  readonly gitRepo?: StatefulSetSpecTemplateSpecVolumeGitRepo[];
  /** glusterfs block */
  readonly glusterfs?: StatefulSetSpecTemplateSpecVolumeGlusterfs[];
  /** host_path block */
  readonly hostPath?: StatefulSetSpecTemplateSpecVolumeHostPath[];
  /** iscsi block */
  readonly iscsi?: StatefulSetSpecTemplateSpecVolumeIscsi[];
  /** local block */
  readonly local?: StatefulSetSpecTemplateSpecVolumeLocal[];
  /** nfs block */
  readonly nfs?: StatefulSetSpecTemplateSpecVolumeNfs[];
  /** persistent_volume_claim block */
  readonly persistentVolumeClaim?: StatefulSetSpecTemplateSpecVolumePersistentVolumeClaim[];
  /** photon_persistent_disk block */
  readonly photonPersistentDisk?: StatefulSetSpecTemplateSpecVolumePhotonPersistentDisk[];
  /** projected block */
  readonly projected?: StatefulSetSpecTemplateSpecVolumeProjected[];
  /** quobyte block */
  readonly quobyte?: StatefulSetSpecTemplateSpecVolumeQuobyte[];
  /** rbd block */
  readonly rbd?: StatefulSetSpecTemplateSpecVolumeRbd[];
  /** secret block */
  readonly secret?: StatefulSetSpecTemplateSpecVolumeSecret[];
  /** vsphere_volume block */
  readonly vsphereVolume?: StatefulSetSpecTemplateSpecVolumeVsphereVolume[];
}

function statefulSetSpecTemplateSpecVolumeToTerraform(struct?: StatefulSetSpecTemplateSpecVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws_elastic_block_store: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform)(struct!.awsElasticBlockStore),
    azure_disk: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeAzureDiskToTerraform)(struct!.azureDisk),
    azure_file: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeAzureFileToTerraform)(struct!.azureFile),
    ceph_fs: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeCephFsToTerraform)(struct!.cephFs),
    cinder: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeCinderToTerraform)(struct!.cinder),
    config_map: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeConfigMapToTerraform)(struct!.configMap),
    csi: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeCsiToTerraform)(struct!.csi),
    downward_api: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeDownwardApiToTerraform)(struct!.downwardApi),
    empty_dir: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeEmptyDirToTerraform)(struct!.emptyDir),
    fc: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeFcToTerraform)(struct!.fc),
    flex_volume: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeFlexVolumeToTerraform)(struct!.flexVolume),
    flocker: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeFlockerToTerraform)(struct!.flocker),
    gce_persistent_disk: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeGcePersistentDiskToTerraform)(struct!.gcePersistentDisk),
    git_repo: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeGitRepoToTerraform)(struct!.gitRepo),
    glusterfs: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeGlusterfsToTerraform)(struct!.glusterfs),
    host_path: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeHostPathToTerraform)(struct!.hostPath),
    iscsi: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeIscsiToTerraform)(struct!.iscsi),
    local: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeLocalToTerraform)(struct!.local),
    nfs: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeNfsToTerraform)(struct!.nfs),
    persistent_volume_claim: cdktf.listMapper(statefulSetSpecTemplateSpecVolumePersistentVolumeClaimToTerraform)(struct!.persistentVolumeClaim),
    photon_persistent_disk: cdktf.listMapper(statefulSetSpecTemplateSpecVolumePhotonPersistentDiskToTerraform)(struct!.photonPersistentDisk),
    projected: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedToTerraform)(struct!.projected),
    quobyte: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeQuobyteToTerraform)(struct!.quobyte),
    rbd: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeRbdToTerraform)(struct!.rbd),
    secret: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeSecretToTerraform)(struct!.secret),
    vsphere_volume: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeVsphereVolumeToTerraform)(struct!.vsphereVolume),
  }
}

export interface StatefulSetSpecTemplateSpec {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  readonly activeDeadlineSeconds?: number;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  readonly automountServiceAccountToken?: boolean;
  /** Set DNS policy for containers within the pod. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Optional: Defaults to 'ClusterFirst', see [Kubernetes reference](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy). */
  readonly dnsPolicy?: string;
  /** Enables generating environment variables for service discovery. Defaults to true. */
  readonly enableServiceLinks?: boolean;
  /** Use the host's ipc namespace. Optional: Defaults to false. */
  readonly hostIpc?: boolean;
  /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. */
  readonly hostNetwork?: boolean;
  /** Use the host's pid namespace. */
  readonly hostPid?: boolean;
  /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
  readonly hostname?: string;
  /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
  readonly nodeName?: string;
  /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection. */
  readonly nodeSelector?: { [key: string]: string };
  /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
  readonly priorityClassName?: string;
  /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy. */
  readonly restartPolicy?: string;
  /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md. */
  readonly serviceAccountName?: string;
  /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Defaults to false. */
  readonly shareProcessNamespace?: boolean;
  /** If specified, the fully qualified Pod hostname will be "...svc.". If not specified, the pod will not have a domainname at all.. */
  readonly subdomain?: string;
  /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. */
  readonly terminationGracePeriodSeconds?: number;
  /** affinity block */
  readonly affinity?: StatefulSetSpecTemplateSpecAffinity[];
  /** container block */
  readonly container?: StatefulSetSpecTemplateSpecContainer[];
  /** dns_config block */
  readonly dnsConfig?: StatefulSetSpecTemplateSpecDnsConfig[];
  /** host_aliases block */
  readonly hostAliases?: StatefulSetSpecTemplateSpecHostAliases[];
  /** image_pull_secrets block */
  readonly imagePullSecrets?: StatefulSetSpecTemplateSpecImagePullSecrets[];
  /** init_container block */
  readonly initContainer?: StatefulSetSpecTemplateSpecInitContainer[];
  /** readiness_gate block */
  readonly readinessGate?: StatefulSetSpecTemplateSpecReadinessGate[];
  /** security_context block */
  readonly securityContext?: StatefulSetSpecTemplateSpecSecurityContext[];
  /** toleration block */
  readonly toleration?: StatefulSetSpecTemplateSpecToleration[];
  /** topology_spread_constraint block */
  readonly topologySpreadConstraint?: StatefulSetSpecTemplateSpecTopologySpreadConstraint[];
  /** volume block */
  readonly volume?: StatefulSetSpecTemplateSpecVolume[];
}

function statefulSetSpecTemplateSpecToTerraform(struct?: StatefulSetSpecTemplateSpec): any {
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
    affinity: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityToTerraform)(struct!.affinity),
    container: cdktf.listMapper(statefulSetSpecTemplateSpecContainerToTerraform)(struct!.container),
    dns_config: cdktf.listMapper(statefulSetSpecTemplateSpecDnsConfigToTerraform)(struct!.dnsConfig),
    host_aliases: cdktf.listMapper(statefulSetSpecTemplateSpecHostAliasesToTerraform)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(statefulSetSpecTemplateSpecImagePullSecretsToTerraform)(struct!.imagePullSecrets),
    init_container: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerToTerraform)(struct!.initContainer),
    readiness_gate: cdktf.listMapper(statefulSetSpecTemplateSpecReadinessGateToTerraform)(struct!.readinessGate),
    security_context: cdktf.listMapper(statefulSetSpecTemplateSpecSecurityContextToTerraform)(struct!.securityContext),
    toleration: cdktf.listMapper(statefulSetSpecTemplateSpecTolerationToTerraform)(struct!.toleration),
    topology_spread_constraint: cdktf.listMapper(statefulSetSpecTemplateSpecTopologySpreadConstraintToTerraform)(struct!.topologySpreadConstraint),
    volume: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeToTerraform)(struct!.volume),
  }
}

export interface StatefulSetSpecTemplate {
  /** metadata block */
  readonly metadata: StatefulSetSpecTemplateMetadata[];
  /** spec block */
  readonly spec?: StatefulSetSpecTemplateSpec[];
}

function statefulSetSpecTemplateToTerraform(struct?: StatefulSetSpecTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metadata: cdktf.listMapper(statefulSetSpecTemplateMetadataToTerraform)(struct!.metadata),
    spec: cdktf.listMapper(statefulSetSpecTemplateSpecToTerraform)(struct!.spec),
  }
}

export interface StatefulSetSpecUpdateStrategyRollingUpdate {
  /** Indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0. */
  readonly partition?: number;
}

function statefulSetSpecUpdateStrategyRollingUpdateToTerraform(struct?: StatefulSetSpecUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    partition: cdktf.numberToTerraform(struct!.partition),
  }
}

export interface StatefulSetSpecUpdateStrategy {
  /** Indicates the type of the StatefulSet update strategy. Default is RollingUpdate */
  readonly type?: string;
  /** rolling_update block */
  readonly rollingUpdate?: StatefulSetSpecUpdateStrategyRollingUpdate[];
}

function statefulSetSpecUpdateStrategyToTerraform(struct?: StatefulSetSpecUpdateStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    rolling_update: cdktf.listMapper(statefulSetSpecUpdateStrategyRollingUpdateToTerraform)(struct!.rollingUpdate),
  }
}

export interface StatefulSetSpecVolumeClaimTemplateMetadata {
  /** An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the persistent volume claim must be unique. */
  readonly namespace?: string;
}

function statefulSetSpecVolumeClaimTemplateMetadataToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface StatefulSetSpecVolumeClaimTemplateSpecResources {
  /** Map describing the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/ */
  readonly limits?: { [key: string]: string };
  /** Map describing the minimum amount of compute resources required. If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: http://kubernetes.io/docs/user-guide/compute-resources/ */
  readonly requests?: { [key: string]: string };
}

function statefulSetSpecVolumeClaimTemplateSpecResourcesToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateSpecResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export interface StatefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function statefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StatefulSetSpecVolumeClaimTemplateSpecSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: StatefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressions[];
}

function statefulSetSpecVolumeClaimTemplateSpecSelectorToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateSpecSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecVolumeClaimTemplateSpec {
  /** A set of the desired access modes the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes-1 */
  readonly accessModes: string[];
  /** Name of the storage class requested by the claim */
  readonly storageClassName?: string;
  /** The binding reference to the PersistentVolume backing this claim. */
  readonly volumeName?: string;
  /** resources block */
  readonly resources: StatefulSetSpecVolumeClaimTemplateSpecResources[];
  /** selector block */
  readonly selector?: StatefulSetSpecVolumeClaimTemplateSpecSelector[];
}

function statefulSetSpecVolumeClaimTemplateSpecToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessModes),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    resources: cdktf.listMapper(statefulSetSpecVolumeClaimTemplateSpecResourcesToTerraform)(struct!.resources),
    selector: cdktf.listMapper(statefulSetSpecVolumeClaimTemplateSpecSelectorToTerraform)(struct!.selector),
  }
}

export interface StatefulSetSpecVolumeClaimTemplate {
  /** metadata block */
  readonly metadata: StatefulSetSpecVolumeClaimTemplateMetadata[];
  /** spec block */
  readonly spec: StatefulSetSpecVolumeClaimTemplateSpec[];
}

function statefulSetSpecVolumeClaimTemplateToTerraform(struct?: StatefulSetSpecVolumeClaimTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metadata: cdktf.listMapper(statefulSetSpecVolumeClaimTemplateMetadataToTerraform)(struct!.metadata),
    spec: cdktf.listMapper(statefulSetSpecVolumeClaimTemplateSpecToTerraform)(struct!.spec),
  }
}

export interface StatefulSetSpec {
  /** Controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. */
  readonly podManagementPolicy?: string;
  /** The desired number of replicas of the given Template, in the sense that they are instantiations of the same Template. Value must be a positive integer. */
  readonly replicas?: string;
  /** The maximum number of revisions that will be maintained in the StatefulSet's revision history. The default value is 10. */
  readonly revisionHistoryLimit?: number;
  /** The name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. */
  readonly serviceName: string;
  /** selector block */
  readonly selector: StatefulSetSpecSelector[];
  /** template block */
  readonly template: StatefulSetSpecTemplate[];
  /** update_strategy block */
  readonly updateStrategy?: StatefulSetSpecUpdateStrategy[];
  /** volume_claim_template block */
  readonly volumeClaimTemplate?: StatefulSetSpecVolumeClaimTemplate[];
}

function statefulSetSpecToTerraform(struct?: StatefulSetSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pod_management_policy: cdktf.stringToTerraform(struct!.podManagementPolicy),
    replicas: cdktf.stringToTerraform(struct!.replicas),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    selector: cdktf.listMapper(statefulSetSpecSelectorToTerraform)(struct!.selector),
    template: cdktf.listMapper(statefulSetSpecTemplateToTerraform)(struct!.template),
    update_strategy: cdktf.listMapper(statefulSetSpecUpdateStrategyToTerraform)(struct!.updateStrategy),
    volume_claim_template: cdktf.listMapper(statefulSetSpecVolumeClaimTemplateToTerraform)(struct!.volumeClaimTemplate),
  }
}

export interface StatefulSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function statefulSetTimeoutsToTerraform(struct?: StatefulSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class StatefulSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StatefulSetConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_stateful_set',
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
  private _metadata: StatefulSetMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: StatefulSetMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: StatefulSetSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: StatefulSetSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StatefulSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StatefulSetTimeouts ) {
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
      metadata: cdktf.listMapper(statefulSetMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(statefulSetSpecToTerraform)(this._spec),
      timeouts: statefulSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
