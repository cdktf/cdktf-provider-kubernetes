# `clusterRole` Submodule <a name="`clusterRole` Submodule" id="@cdktf/provider-kubernetes.clusterRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterRole <a name="ClusterRole" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role kubernetes_cluster_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRole;

ClusterRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(ClusterRoleMetadata)
//  .aggregationRule(ClusterRoleAggregationRule)
//  .id(java.lang.String)
//  .rule(IResolvable)
//  .rule(java.util.List<ClusterRoleRule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.aggregationRule">aggregationRule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a></code> | aggregation_rule block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#id ClusterRole#id}. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>></code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#metadata ClusterRole#metadata}

---

##### `aggregationRule`<sup>Optional</sup> <a name="aggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.aggregationRule"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a>

aggregation_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#aggregation_rule ClusterRole#aggregation_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#id ClusterRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#rule ClusterRole#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.putAggregationRule">putAggregationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetAggregationRule">resetAggregationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAggregationRule` <a name="putAggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putAggregationRule"></a>

```java
public void putAggregationRule(ClusterRoleAggregationRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putAggregationRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putMetadata"></a>

```java
public void putMetadata(ClusterRoleMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<ClusterRoleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>>

---

##### `resetAggregationRule` <a name="resetAggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetAggregationRule"></a>

```java
public void resetAggregationRule()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetId"></a>

```java
public void resetId()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.resetRule"></a>

```java
public void resetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClusterRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRole;

ClusterRole.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRole;

ClusterRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRole;

ClusterRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRole;

ClusterRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ClusterRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ClusterRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ClusterRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ClusterRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ClusterRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.aggregationRule">aggregationRule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference">ClusterRoleAggregationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference">ClusterRoleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList">ClusterRoleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.aggregationRuleInput">aggregationRuleInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aggregationRule`<sup>Required</sup> <a name="aggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.aggregationRule"></a>

```java
public ClusterRoleAggregationRuleOutputReference getAggregationRule();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference">ClusterRoleAggregationRuleOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.metadata"></a>

```java
public ClusterRoleMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference">ClusterRoleMetadataOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.rule"></a>

```java
public ClusterRoleRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList">ClusterRoleRuleList</a>

---

##### `aggregationRuleInput`<sup>Optional</sup> <a name="aggregationRuleInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.aggregationRuleInput"></a>

```java
public ClusterRoleAggregationRule getAggregationRuleInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.metadataInput"></a>

```java
public ClusterRoleMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.clusterRole.ClusterRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterRoleAggregationRule <a name="ClusterRoleAggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleAggregationRule;

ClusterRoleAggregationRule.builder()
//  .clusterRoleSelectors(IResolvable)
//  .clusterRoleSelectors(java.util.List<ClusterRoleAggregationRuleClusterRoleSelectors>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule.property.clusterRoleSelectors">clusterRoleSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>></code> | cluster_role_selectors block. |

---

##### `clusterRoleSelectors`<sup>Optional</sup> <a name="clusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule.property.clusterRoleSelectors"></a>

```java
public java.lang.Object getClusterRoleSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>>

cluster_role_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#cluster_role_selectors ClusterRole#cluster_role_selectors}

---

### ClusterRoleAggregationRuleClusterRoleSelectors <a name="ClusterRoleAggregationRuleClusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleAggregationRuleClusterRoleSelectors;

ClusterRoleAggregationRuleClusterRoleSelectors.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#match_expressions ClusterRole#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#match_labels ClusterRole#match_labels}

---

### ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions <a name="ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions;

ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#key ClusterRole#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#operator ClusterRole#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#values ClusterRole#values}

---

### ClusterRoleConfig <a name="ClusterRoleConfig" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleConfig;

ClusterRoleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(ClusterRoleMetadata)
//  .aggregationRule(ClusterRoleAggregationRule)
//  .id(java.lang.String)
//  .rule(IResolvable)
//  .rule(java.util.List<ClusterRoleRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.aggregationRule">aggregationRule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a></code> | aggregation_rule block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#id ClusterRole#id}. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>></code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.metadata"></a>

```java
public ClusterRoleMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#metadata ClusterRole#metadata}

---

##### `aggregationRule`<sup>Optional</sup> <a name="aggregationRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.aggregationRule"></a>

```java
public ClusterRoleAggregationRule getAggregationRule();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a>

aggregation_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#aggregation_rule ClusterRole#aggregation_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#id ClusterRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#rule ClusterRole#rule}

---

### ClusterRoleMetadata <a name="ClusterRoleMetadata" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleMetadata;

ClusterRoleMetadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .generateName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the clusterRole, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#annotations ClusterRole#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#generate_name ClusterRole#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#labels ClusterRole#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the clusterRole, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#name ClusterRole#name}

---

### ClusterRoleRule <a name="ClusterRoleRule" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleRule;

ClusterRoleRule.builder()
    .verbs(java.util.List<java.lang.String>)
//  .apiGroups(java.util.List<java.lang.String>)
//  .nonResourceUrls(java.util.List<java.lang.String>)
//  .resourceNames(java.util.List<java.lang.String>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.verbs">verbs</a></code> | <code>java.util.List<java.lang.String></code> | Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.apiGroups">apiGroups</a></code> | <code>java.util.List<java.lang.String></code> | APIGroups is the name of the APIGroup that contains the resources. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.nonResourceUrls">nonResourceUrls</a></code> | <code>java.util.List<java.lang.String></code> | NonResourceURLs is a set of partial urls that a user should have access to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.resourceNames">resourceNames</a></code> | <code>java.util.List<java.lang.String></code> | ResourceNames is an optional white list of names that the rule applies to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Resources is a list of resources this rule applies to. ResourceAll represents all resources. |

---

##### `verbs`<sup>Required</sup> <a name="verbs" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.verbs"></a>

```java
public java.util.List<java.lang.String> getVerbs();
```

- *Type:* java.util.List<java.lang.String>

Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.

VerbAll represents all kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#verbs ClusterRole#verbs}

---

##### `apiGroups`<sup>Optional</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.apiGroups"></a>

```java
public java.util.List<java.lang.String> getApiGroups();
```

- *Type:* java.util.List<java.lang.String>

APIGroups is the name of the APIGroup that contains the resources.

If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#api_groups ClusterRole#api_groups}

---

##### `nonResourceUrls`<sup>Optional</sup> <a name="nonResourceUrls" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.nonResourceUrls"></a>

```java
public java.util.List<java.lang.String> getNonResourceUrls();
```

- *Type:* java.util.List<java.lang.String>

NonResourceURLs is a set of partial urls that a user should have access to.

*s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"), but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#non_resource_urls ClusterRole#non_resource_urls}

---

##### `resourceNames`<sup>Optional</sup> <a name="resourceNames" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.resourceNames"></a>

```java
public java.util.List<java.lang.String> getResourceNames();
```

- *Type:* java.util.List<java.lang.String>

ResourceNames is an optional white list of names that the rule applies to.

An empty set means that everything is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#resource_names ClusterRole#resource_names}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Resources is a list of resources this rule applies to. ResourceAll represents all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.36.0/docs/resources/cluster_role#resources ClusterRole#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterRoleAggregationRuleClusterRoleSelectorsList <a name="ClusterRoleAggregationRuleClusterRoleSelectorsList" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleAggregationRuleClusterRoleSelectorsList;

new ClusterRoleAggregationRuleClusterRoleSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.get"></a>

```java
public ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>>

---


### ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList <a name="ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList;

new ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.get"></a>

```java
public ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>>

---


### ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference <a name="ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference;

new ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>

---


### ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference <a name="ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference;

new ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressions"></a>

```java
public ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>

---


### ClusterRoleAggregationRuleOutputReference <a name="ClusterRoleAggregationRuleOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleAggregationRuleOutputReference;

new ClusterRoleAggregationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterRoleSelectors` <a name="putClusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.putClusterRoleSelectors"></a>

```java
public void putClusterRoleSelectors(IResolvable OR java.util.List<ClusterRoleAggregationRuleClusterRoleSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.putClusterRoleSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>>

---

##### `resetClusterRoleSelectors` <a name="resetClusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.resetClusterRoleSelectors"></a>

```java
public void resetClusterRoleSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.clusterRoleSelectors">clusterRoleSelectors</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList">ClusterRoleAggregationRuleClusterRoleSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.clusterRoleSelectorsInput">clusterRoleSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterRoleSelectors`<sup>Required</sup> <a name="clusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.clusterRoleSelectors"></a>

```java
public ClusterRoleAggregationRuleClusterRoleSelectorsList getClusterRoleSelectors();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectorsList">ClusterRoleAggregationRuleClusterRoleSelectorsList</a>

---

##### `clusterRoleSelectorsInput`<sup>Optional</sup> <a name="clusterRoleSelectorsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.clusterRoleSelectorsInput"></a>

```java
public java.lang.Object getClusterRoleSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleClusterRoleSelectors">ClusterRoleAggregationRuleClusterRoleSelectors</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRuleOutputReference.property.internalValue"></a>

```java
public ClusterRoleAggregationRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleAggregationRule">ClusterRoleAggregationRule</a>

---


### ClusterRoleMetadataOutputReference <a name="ClusterRoleMetadataOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleMetadataOutputReference;

new ClusterRoleMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadataOutputReference.property.internalValue"></a>

```java
public ClusterRoleMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleMetadata">ClusterRoleMetadata</a>

---


### ClusterRoleRuleList <a name="ClusterRoleRuleList" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleRuleList;

new ClusterRoleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.get"></a>

```java
public ClusterRoleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>>

---


### ClusterRoleRuleOutputReference <a name="ClusterRoleRuleOutputReference" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.cluster_role.ClusterRoleRuleOutputReference;

new ClusterRoleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiGroups` <a name="resetApiGroups" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetApiGroups"></a>

```java
public void resetApiGroups()
```

##### `resetNonResourceUrls` <a name="resetNonResourceUrls" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetNonResourceUrls"></a>

```java
public void resetNonResourceUrls()
```

##### `resetResourceNames` <a name="resetResourceNames" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetResourceNames"></a>

```java
public void resetResourceNames()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.apiGroupsInput">apiGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.nonResourceUrlsInput">nonResourceUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourceNamesInput">resourceNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.verbsInput">verbsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.apiGroups">apiGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.nonResourceUrls">nonResourceUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourceNames">resourceNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.verbs">verbs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiGroupsInput`<sup>Optional</sup> <a name="apiGroupsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.apiGroupsInput"></a>

```java
public java.util.List<java.lang.String> getApiGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nonResourceUrlsInput`<sup>Optional</sup> <a name="nonResourceUrlsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.nonResourceUrlsInput"></a>

```java
public java.util.List<java.lang.String> getNonResourceUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceNamesInput`<sup>Optional</sup> <a name="resourceNamesInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourceNamesInput"></a>

```java
public java.util.List<java.lang.String> getResourceNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verbsInput`<sup>Optional</sup> <a name="verbsInput" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.verbsInput"></a>

```java
public java.util.List<java.lang.String> getVerbsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiGroups`<sup>Required</sup> <a name="apiGroups" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.apiGroups"></a>

```java
public java.util.List<java.lang.String> getApiGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nonResourceUrls`<sup>Required</sup> <a name="nonResourceUrls" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.nonResourceUrls"></a>

```java
public java.util.List<java.lang.String> getNonResourceUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resourceNames"></a>

```java
public java.util.List<java.lang.String> getResourceNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verbs`<sup>Required</sup> <a name="verbs" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.verbs"></a>

```java
public java.util.List<java.lang.String> getVerbs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.clusterRole.ClusterRoleRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.clusterRole.ClusterRoleRule">ClusterRoleRule</a>

---



