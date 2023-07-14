# `kubernetes_cluster_role`

Refer to the Terraform Registory for docs: [`kubernetes_cluster_role`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role).

# `clusterRole` Submodule <a name="`clusterRole` Submodule" id="@cdktf/provider-kubernetes.clusterRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterRole <a name="ClusterRole" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role kubernetes_cluster_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

new clusterRole.ClusterRole(scope: Construct, id: string, config: ClusterRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig">ClusterRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig">ClusterRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.putAggregationRule">putAggregationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetAggregationRule">resetAggregationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAggregationRule` <a name="putAggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putAggregationRule"></a>

```typescript
public putAggregationRule(value: ClusterRoleAggregationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putAggregationRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putMetadata"></a>

```typescript
public putMetadata(value: ClusterRoleMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putRule"></a>

```typescript
public putRule(value: IResolvable | ClusterRoleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>[]

---

##### `resetAggregationRule` <a name="resetAggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetAggregationRule"></a>

```typescript
public resetAggregationRule(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetRule"></a>

```typescript
public resetRule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isConstruct"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

clusterRole.ClusterRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformElement"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

clusterRole.ClusterRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformResource"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

clusterRole.ClusterRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.aggregationRule">aggregationRule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference">ClusterRoleAggregationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference">ClusterRoleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList">ClusterRoleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.aggregationRuleInput">aggregationRuleInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aggregationRule`<sup>Required</sup> <a name="aggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.aggregationRule"></a>

```typescript
public readonly aggregationRule: ClusterRoleAggregationRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference">ClusterRoleAggregationRuleOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.metadata"></a>

```typescript
public readonly metadata: ClusterRoleMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference">ClusterRoleMetadataOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.rule"></a>

```typescript
public readonly rule: ClusterRoleRuleList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList">ClusterRoleRuleList</a>

---

##### `aggregationRuleInput`<sup>Optional</sup> <a name="aggregationRuleInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.aggregationRuleInput"></a>

```typescript
public readonly aggregationRuleInput: ClusterRoleAggregationRule;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.metadataInput"></a>

```typescript
public readonly metadataInput: ClusterRoleMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | ClusterRoleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterRoleAggregationRule <a name="ClusterRoleAggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

const clusterRoleAggregationRule: clusterRole.ClusterRoleAggregationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule.property.clusterRoleSelectors">clusterRoleSelectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>[]</code> | cluster_role_selectors block. |

---

##### `clusterRoleSelectors`<sup>Optional</sup> <a name="clusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule.property.clusterRoleSelectors"></a>

```typescript
public readonly clusterRoleSelectors: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>[]

cluster_role_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#cluster_role_selectors ClusterRole#cluster_role_selectors}

---

### ClusterRoleAggregationRuleClusterRoleSelectors <a name="ClusterRoleAggregationRuleClusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

const clusterRoleAggregationRuleClusterRoleSelectors: clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#match_expressions ClusterRole#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#match_labels ClusterRole#match_labels}

---

### ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions <a name="ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

const clusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions: clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#key ClusterRole#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#operator ClusterRole#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#values ClusterRole#values}

---

### ClusterRoleConfig <a name="ClusterRoleConfig" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

const clusterRoleConfig: clusterRole.ClusterRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.aggregationRule">aggregationRule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a></code> | aggregation_rule block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#id ClusterRole#id}. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>[]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.metadata"></a>

```typescript
public readonly metadata: ClusterRoleMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#metadata ClusterRole#metadata}

---

##### `aggregationRule`<sup>Optional</sup> <a name="aggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.aggregationRule"></a>

```typescript
public readonly aggregationRule: ClusterRoleAggregationRule;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a>

aggregation_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#aggregation_rule ClusterRole#aggregation_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#id ClusterRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | ClusterRoleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#rule ClusterRole#rule}

---

### ClusterRoleMetadata <a name="ClusterRoleMetadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

const clusterRoleMetadata: clusterRole.ClusterRoleMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.name">name</a></code> | <code>string</code> | Name of the clusterRole, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#annotations ClusterRole#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#generate_name ClusterRole#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#labels ClusterRole#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the clusterRole, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#name ClusterRole#name}

---

### ClusterRoleRule <a name="ClusterRoleRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

const clusterRoleRule: clusterRole.ClusterRoleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.verbs">verbs</a></code> | <code>string[]</code> | Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.apiGroups">apiGroups</a></code> | <code>string[]</code> | APIGroups is the name of the APIGroup that contains the resources. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.nonResourceUrls">nonResourceUrls</a></code> | <code>string[]</code> | NonResourceURLs is a set of partial urls that a user should have access to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.resourceNames">resourceNames</a></code> | <code>string[]</code> | ResourceNames is an optional white list of names that the rule applies to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.resources">resources</a></code> | <code>string[]</code> | Resources is a list of resources this rule applies to. ResourceAll represents all resources. |

---

##### `verbs`<sup>Required</sup> <a name="verbs" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.verbs"></a>

```typescript
public readonly verbs: string[];
```

- *Type:* string[]

Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.

VerbAll represents all kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#verbs ClusterRole#verbs}

---

##### `apiGroups`<sup>Optional</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.apiGroups"></a>

```typescript
public readonly apiGroups: string[];
```

- *Type:* string[]

APIGroups is the name of the APIGroup that contains the resources.

If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#api_groups ClusterRole#api_groups}

---

##### `nonResourceUrls`<sup>Optional</sup> <a name="nonResourceUrls" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.nonResourceUrls"></a>

```typescript
public readonly nonResourceUrls: string[];
```

- *Type:* string[]

NonResourceURLs is a set of partial urls that a user should have access to.

*s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"), but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#non_resource_urls ClusterRole#non_resource_urls}

---

##### `resourceNames`<sup>Optional</sup> <a name="resourceNames" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.resourceNames"></a>

```typescript
public readonly resourceNames: string[];
```

- *Type:* string[]

ResourceNames is an optional white list of names that the rule applies to.

An empty set means that everything is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#resource_names ClusterRole#resource_names}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Resources is a list of resources this rule applies to. ResourceAll represents all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.22.0/docs/resources/cluster_role#resources ClusterRole#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterRoleAggregationRuleClusterRoleSelectorsList <a name="ClusterRoleAggregationRuleClusterRoleSelectorsList" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

new clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.get"></a>

```typescript
public get(index: number): ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>[]

---


### ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList <a name="ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

new clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.get"></a>

```typescript
public get(index: number): ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>[]

---


### ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference <a name="ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

new clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>

---


### ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference <a name="ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

new clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>

---


### ClusterRoleAggregationRuleOutputReference <a name="ClusterRoleAggregationRuleOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

new clusterRole.ClusterRoleAggregationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.putClusterRoleSelectors">putClusterRoleSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.resetClusterRoleSelectors">resetClusterRoleSelectors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterRoleSelectors` <a name="putClusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.putClusterRoleSelectors"></a>

```typescript
public putClusterRoleSelectors(value: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.putClusterRoleSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>[]

---

##### `resetClusterRoleSelectors` <a name="resetClusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.resetClusterRoleSelectors"></a>

```typescript
public resetClusterRoleSelectors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.clusterRoleSelectors">clusterRoleSelectors</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList">ClusterRoleAggregationRuleClusterRoleSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.clusterRoleSelectorsInput">clusterRoleSelectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterRoleSelectors`<sup>Required</sup> <a name="clusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.clusterRoleSelectors"></a>

```typescript
public readonly clusterRoleSelectors: ClusterRoleAggregationRuleClusterRoleSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList">ClusterRoleAggregationRuleClusterRoleSelectorsList</a>

---

##### `clusterRoleSelectorsInput`<sup>Optional</sup> <a name="clusterRoleSelectorsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.clusterRoleSelectorsInput"></a>

```typescript
public readonly clusterRoleSelectorsInput: IResolvable | ClusterRoleAggregationRuleClusterRoleSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterRoleAggregationRule;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a>

---


### ClusterRoleMetadataOutputReference <a name="ClusterRoleMetadataOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

new clusterRole.ClusterRoleMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterRoleMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a>

---


### ClusterRoleRuleList <a name="ClusterRoleRuleList" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

new clusterRole.ClusterRoleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.get"></a>

```typescript
public get(index: number): ClusterRoleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterRoleRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>[]

---


### ClusterRoleRuleOutputReference <a name="ClusterRoleRuleOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer"></a>

```typescript
import { clusterRole } from '@cdktf/provider-kubernetes'

new clusterRole.ClusterRoleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetApiGroups">resetApiGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetNonResourceUrls">resetNonResourceUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetResourceNames">resetResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiGroups` <a name="resetApiGroups" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetApiGroups"></a>

```typescript
public resetApiGroups(): void
```

##### `resetNonResourceUrls` <a name="resetNonResourceUrls" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetNonResourceUrls"></a>

```typescript
public resetNonResourceUrls(): void
```

##### `resetResourceNames` <a name="resetResourceNames" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetResourceNames"></a>

```typescript
public resetResourceNames(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.apiGroupsInput">apiGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.nonResourceUrlsInput">nonResourceUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourceNamesInput">resourceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.verbsInput">verbsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.apiGroups">apiGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.nonResourceUrls">nonResourceUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourceNames">resourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.verbs">verbs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiGroupsInput`<sup>Optional</sup> <a name="apiGroupsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.apiGroupsInput"></a>

```typescript
public readonly apiGroupsInput: string[];
```

- *Type:* string[]

---

##### `nonResourceUrlsInput`<sup>Optional</sup> <a name="nonResourceUrlsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.nonResourceUrlsInput"></a>

```typescript
public readonly nonResourceUrlsInput: string[];
```

- *Type:* string[]

---

##### `resourceNamesInput`<sup>Optional</sup> <a name="resourceNamesInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourceNamesInput"></a>

```typescript
public readonly resourceNamesInput: string[];
```

- *Type:* string[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `verbsInput`<sup>Optional</sup> <a name="verbsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.verbsInput"></a>

```typescript
public readonly verbsInput: string[];
```

- *Type:* string[]

---

##### `apiGroups`<sup>Required</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.apiGroups"></a>

```typescript
public readonly apiGroups: string[];
```

- *Type:* string[]

---

##### `nonResourceUrls`<sup>Required</sup> <a name="nonResourceUrls" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.nonResourceUrls"></a>

```typescript
public readonly nonResourceUrls: string[];
```

- *Type:* string[]

---

##### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourceNames"></a>

```typescript
public readonly resourceNames: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `verbs`<sup>Required</sup> <a name="verbs" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.verbs"></a>

```typescript
public readonly verbs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClusterRoleRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>

---



