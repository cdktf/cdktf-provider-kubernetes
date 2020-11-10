// https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ClusterRoleConfig extends TerraformMetaArguments {
  /** aggregation_rule block */
  readonly aggregationRule?: ClusterRoleAggregationRule[];
  /** metadata block */
  readonly metadata: ClusterRoleMetadata[];
  /** rule block */
  readonly rule?: ClusterRoleRule[];
}
export interface ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface ClusterRoleAggregationRuleClusterRoleSelectors {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions[];
}
export interface ClusterRoleAggregationRule {
  /** cluster_role_selectors block */
  readonly clusterRoleSelectors?: ClusterRoleAggregationRuleClusterRoleSelectors[];
}
export interface ClusterRoleMetadata {
  /** An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the clusterRole, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface ClusterRoleRule {
  /** APIGroups is the name of the APIGroup that contains the resources. If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. */
  readonly apiGroups?: string[];
  /** NonResourceURLs is a set of partial urls that a user should have access to. *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"), but not both. */
  readonly nonResourceUrls?: string[];
  /** ResourceNames is an optional white list of names that the rule applies to. An empty set means that everything is allowed. */
  readonly resourceNames?: string[];
  /** Resources is a list of resources this rule applies to. ResourceAll represents all resources. */
  readonly resources?: string[];
  /** Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. VerbAll represents all kinds. */
  readonly verbs: string[];
}

// Resource

export class ClusterRole extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ClusterRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_cluster_role',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aggregationRule = config.aggregationRule;
    this._metadata = config.metadata;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // aggregation_rule - computed: false, optional: true, required: false
  private _aggregationRule?: ClusterRoleAggregationRule[];
  public get aggregationRule() {
    return this.interpolationForAttribute('aggregation_rule') as any;
  }
  public set aggregationRule(value: ClusterRoleAggregationRule[] ) {
    this._aggregationRule = value;
  }
  public resetAggregationRule() {
    this._aggregationRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationRuleInput() {
    return this._aggregationRule
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ClusterRoleMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: ClusterRoleMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: ClusterRoleRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: ClusterRoleRule[] ) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_rule: this._aggregationRule,
      metadata: this._metadata,
      rule: this._rule,
    };
  }
}
